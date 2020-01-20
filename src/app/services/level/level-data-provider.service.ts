import {Injectable} from '@angular/core';
import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {ReplaySubject, Subject} from 'rxjs/index';
import {LevelItemInterface} from '../../interfaces/level-item.interface';
import {countTestLevels, countTestMilestones, getTestLevel, listTestLevels} from '../../../graphql/queries';
import {createTestLevel, deleteTestGrade, deleteTestLevel, updateTestLevel} from '../../../graphql/mutations';

@Injectable({
    providedIn: 'root'
})
export class LevelDataProviderService extends TestDataProviderService {

    protected levels: Array<LevelItemInterface> = [];

    protected levelsSubject$;

    public levels$;

    init() {
        this.levelsSubject$ = new ReplaySubject<LevelItemInterface[]>(1);
        this.levels$ = this.levelsSubject$.asObservable();
    }


    async getLevelsCount() {
        const queryResult: any = await this.runQuery(countTestLevels);
        const count = queryResult.data.countTestLevels.count;
        return count;
    }

    getLevels() {
        return this.levels;
    }

    /**
     * Fetches levels list
     * @returns {Promise<LevelItemInterface[]>}
     */
    async fetchLevels(): Promise<LevelItemInterface[]> {
        const queryResult: any = await this.runQuery(listTestLevels, {
            limit: 9999,
        });
        this.levels = queryResult.data.listTestLevels.items;
        this.levelsSubject$.next(this.levels);

        this.sortLevels();

        return queryResult;
    }

    private sortLevels() {
        if (this.levels.length > 0) {
            this.levels.sort(function (a, b) {
                    if (a.levelName < b.levelName) return -1;
                    if (a.levelName > b.levelName) return 1;
                    return 0;
                }
            );
        }
    }


    getLevel(name: string) {
        return this.runQuery(getTestLevel, {levelName: name});
    }

    /**
     * Updates level
     * @param {LevelItemInterface} level
     * @returns {Promise<void>}
     */
    async updateLevel(level: LevelItemInterface) {
        const updateQuery = await this.runQuery(updateTestLevel, {input: level});
        const updatedLevel = updateQuery.data.updateTestLevel;
        const levelName = updatedLevel.levelName;
        const index = this.levels.findIndex(item => item.levelName === levelName);          // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {                                                                         // FIXME [TO_DMITRY]: Move to helper.
            this.levels[index] = updatedLevel;
        }

        this.levelsSubject$.next(this.levels);
    }

    /**
     * Creates new level
     * @param {LevelItemInterface} level
     * @returns {Promise<void>}
     */
    async createLevel(level: LevelItemInterface) {

        const createQuery = await this.runQuery(createTestLevel, {input: level});
        const newLevel = createQuery.data.createTestLevel;
        this.levels.push(newLevel);
        this.levelsSubject$.next(this.levels);
    }

    /**
     * Deletes level by ID
     * @param {string} levelName
     * @returns {Promise<any>}
     */
    async deleteLevel(levelName: string) {

        const queryResult = this.runQuery(deleteTestLevel, {input: {levelName: levelName}});
        const index = this.levels.findIndex(item => item.levelName === levelName);                      // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {                                                                                     // FIXME [TO_DMITRY]: Move to helper.
            this.levels.splice(index, 1);
        }

        this.sortLevels();
        this.levelsSubject$.next(this.levels);
        return queryResult;
    }


}
