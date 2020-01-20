import {Injectable} from '@angular/core';
import {InstructorItemInterface} from '../../interfaces/instructor-item.interface';
import {Subject} from 'rxjs';
import {
    getTestUser,
    listTestUsers
} from '../../../graphql/queries';
import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {
    createTestUser,
    deleteTestUser,

    updateTestUser
} from '../../../graphql/mutations';


@Injectable({
    providedIn: 'root'
})

export class InstructorDataProviderService extends TestDataProviderService {

    // TODO move most of methods to user data provider service

    protected instructors: Array<InstructorItemInterface> = [];

    protected instructorsSubject$;

    public instructors$;

    init() {
        this.instructorsSubject$ = new Subject<InstructorItemInterface[]>();
        this.instructors$ = this.instructorsSubject$.asObservable();
    }

    getInstructor(id) {
        return this.runQuery(getTestUser, {userId: id});
    }


    async createInstructor(instructor: InstructorItemInterface) {

        instructor.userId = 'test-instructor-uuid';

        const createQuery = await this.runQuery(createTestUser, {input: instructor});
        const createdInstructor = createQuery.data.createTestUser;

        this.instructors.push(createdInstructor);
        this.instructorsSubject$.next(this.instructors);
    }

    async deleteInstructor(instructorId: string) {
        const queryResult = this.runQuery(deleteTestUser, {input: {userId: instructorId}});

        const index = this.instructors.findIndex(item => item.userId === instructorId);     // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {                                                        // FIXME [TO_DMITRY]: Move to helper.
            this.instructors.splice(index, 1);
        }
        this.instructorsSubject$.next(this.instructors);
        return queryResult;
    }

    async fetchInstructors() {
        const queryResult: any = await this.runQuery(listTestUsers, {
            filter: {
                role: {
                    eq: 'instructor'
                }
            }
        });

        if (queryResult.data.listTestUsers !== undefined) {
            this.instructors = queryResult.data.listTestUsers.items;
        } else {
            this.instructors = null;
        }

        this.instructorsSubject$.next(this.instructors);
        return queryResult;
    }

    async updateInstructor(instructor: InstructorItemInterface) {
        const updateQuery: any = await this.runQuery(updateTestUser, {input: instructor});
        const updatedInstructor = updateQuery.data.updateTestUser;
        const instructorId = updatedInstructor.instructorUserId;

        const index = this.instructors.findIndex(item => item.userId === instructorId);

        if (index !== -1) {
            this.instructors[index] = updatedInstructor;
        }

        this.instructorsSubject$.next(this.instructors);
    }

}
