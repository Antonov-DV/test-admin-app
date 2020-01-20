import {Injectable} from '@angular/core';
import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {countTestGrades, getTestGrade, listTestGrades} from '../../../graphql/queries';
import {GradeItemInterface} from '../../interfaces/grade-item.interface';
import {
    createTestGrade, deleteTestGrade,
    updateTestGrade,
} from "../../../graphql/mutations";
import {Subject} from "rxjs/index";


@Injectable({
    providedIn: 'root'
})
export class GradeDataProviderService extends TestDataProviderService{

    protected grades: Array<GradeItemInterface> = [];
    protected gradesSubject$;

    public grades$;

    constructor() {
        super();
        this.gradesSubject$ = new Subject<GradeItemInterface[]>();
        this.grades$ = this.gradesSubject$.asObservable();
    }


     getGrades() {
        return this.grades;
    }

     async fetchGrades(): Promise<GradeItemInterface[]> {
        const queryResult: any = await this.runQuery(listTestGrades, {
            limit: 9999,
        });

        this.grades = queryResult.data.listTestGrades.items;
        this.sortGrades();
        this.gradesSubject$.next(this.grades);
        return queryResult;
    }

    getGrade(id: string) {
        return this.runQuery(getTestGrade, {gradeId: id});
    }

    async updateGrade(grade: GradeItemInterface) {
        const updateQuery = await this.runQuery(updateTestGrade, {input: grade});
        const updatedGrade = updateQuery.data.updateTestGrade;
        const gradeId = updatedGrade.gradeId;
        const index = this.grades.findIndex(item => item.gradeId === gradeId);              // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {                                                                         // FIXME [TO_DMITRY]: Move to helper.
            this.grades[index] = updatedGrade;
        }
        this.sortGrades();
        this.gradesSubject$.next(this.grades);
    }

    async createGrade(grade: GradeItemInterface) {
        const createQuery = await this.runQuery(createTestGrade, {input: grade});
        const newGrade = createQuery.data.createTestGrade;

        this.grades.push(newGrade);
        this.sortGrades();
        this.gradesSubject$.next(this.grades);
    }

    protected sortGrades() {
        if (this.grades.length > 0) {
            this.grades.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }
            );
        }
    }

    /**
     * Deletes grade by ID
     * @param {string} gradeId
     * @returns {Promise<any>}
     */
    async deleteGrade(gradeId: string) {
        const queryResult = this.runQuery(deleteTestGrade, {input: {gradeId: gradeId}});
        const index = this.grades.findIndex(item => item.gradeId === gradeId);                      // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {                                                                                     // FIXME [TO_DMITRY]: Move to helper.
            this.grades.splice(index,1);
        }
        this.sortGrades();
        this.gradesSubject$.next(this.grades);
        return queryResult;
    }

    async getGradesCount() {
        // debugger;
        const queryResult: any = await this.runQuery(countTestGrades);
        // console.log(queryResult);
        // console.log(queryResult.data);

        const count = queryResult.data.countTestGrades.count;
        // console.log(count);
        return count;
        // return "3";
    }
}
