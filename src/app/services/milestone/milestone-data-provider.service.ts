import {Injectable} from '@angular/core';
import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {MilestoneItemInterface} from '../../interfaces/milestone-item.interface';
import {
    countTestMilestoneCategories, countTestMilestones,
    getTestMilestone,
    listTestMilestones,
    listTestQuestions
} from '../../../graphql/queries';
import {Subject} from 'rxjs/index';
import {createTestMilestone, deleteTestMilestone, updateTestMilestone} from '../../../graphql/mutations';
import {QuestionItemInterface} from '../../interfaces/question-item.interface';

@Injectable({
    providedIn: 'root'
})

export class MilestoneDataProviderService extends TestDataProviderService {

    protected milestones: Array<MilestoneItemInterface> = [];

    // async getCurrentMilestones() {
    //     if (this.milestones.length === 0) {
    //         await this.fetchMilestonesList();
    //     }
    //
    //     return this.milestones;
    // }
    //
    // async fetchMilestonesList() {
    //     const milestonesData = await this.runQuery(listTestMilestones);
    //     this.milestones = milestonesData.data.listTestMilestones.items;
    // }

    protected milestonesSubject$;

    public milestones$;

    constructor() {
        super();
        this.milestonesSubject$ = new Subject<MilestoneItemInterface[]>();
        this.milestones$ = this.milestonesSubject$.asObservable();
    }

    async getMilestonesCount() {
        const queryResult: any = await this.runQuery(countTestMilestones);
        const count = queryResult.data.countTestMilestones.count;
        return count;
    }

    getMilestones() {
        return this.milestones;
    }

    public async getMilestonesByCategory(categoryId) {
        const queryResult: any = await this.runQuery(listTestMilestones, {
            filter: {
                categoryId: {
                    eq: categoryId
                }
            },
            limit: 9999,
        });

        this.milestones = queryResult.data.listTestMilestones.items;
        this.sortMilestones();
        this.milestonesSubject$.next(this.milestones);
        return queryResult;
    }


    async fetchMilestones(): Promise<MilestoneItemInterface[]> {
        const queryResult: any = await this.runQuery(listTestMilestones, {
            limit: 9999,
        });
        this.milestones = queryResult.data.listTestMilestones.items;
        this.sortMilestones();
        this.milestonesSubject$.next(this.milestones);
        return queryResult;
    }

    getMilestone(id: string) {
        return this.runQuery(getTestMilestone, {milestoneId: id});
    }

    async updateMilestone(milestone: MilestoneItemInterface) {
        const updateQuery = await this.runQuery(updateTestMilestone, {input: milestone});
        const updatedMilestone = updateQuery.data.updateTestMilestone;
        const milestoneId = updatedMilestone.milestoneId;
        const index = this.milestones.findIndex(item => item.milestoneId === milestoneId);

        if (index !== -1) {
            this.milestones[index] = updatedMilestone;
        }
        this.sortMilestones();
        this.milestonesSubject$.next(this.milestones);
        return updateQuery;
    }


    async createMilestone(milestone: MilestoneItemInterface) {
        const createQuery = await this.runQuery(createTestMilestone, {input: milestone});
        const newMilestone = createQuery.data.createTestMilestone;

        this.milestones.push(newMilestone);
        this.sortMilestones();
        this.milestonesSubject$.next(this.milestones);
    }

    protected sortMilestones() {
        if (this.milestones.length > 0) {
            this.milestones.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }
            );
        }
    }

    /**
     * Deletes milestone by ID
     * @param {string} milestoneId
     * @returns {Promise<any>}
     */
    async deleteMilestone(milestoneId) {
        const queryResult = this.runQuery(deleteTestMilestone, {input: {milestoneId: milestoneId}});
        const index = this.milestones.findIndex(item => item.milestoneId === milestoneId);

        if (index !== -1) {
            this.milestones.splice(index, 1);
        }
        this.sortMilestones();
        this.milestonesSubject$.next(this.milestones);
        return queryResult;
    }

}
