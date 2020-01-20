import {TestDataProviderService} from "../test-data-service/test-data-provider.service";
import {BadgeItemInterface} from "../../interfaces/badge-item.interface";
import {Subject} from "rxjs/index";
import {countTestBadges, countTestQuestions, getTestBadge, listTestBadges} from "../../../graphql/queries";
import {Injectable} from "@angular/core";
import {createTestBadge, deleteTestBadge, updateTestBadge} from "../../../graphql/mutations";

@Injectable({
    providedIn: 'root'
})

export class BadgeDataProviderService extends TestDataProviderService {

    protected badges: Array<BadgeItemInterface> = [];

    protected badgesSubject$;

    public badges$;

    init() {
        this.badgesSubject$ = new Subject<BadgeItemInterface[]>();
        this.badges$ = this.badgesSubject$.asObservable();
    }

    async getBadgesCount() {
        const queryResult: any = await this.runQuery(countTestBadges);
        const count = queryResult.data.countTestBadges.count;
        return count;
    }


    public getBadges() {
        return this.badges;
    }

    async fetchBadges(): Promise<BadgeItemInterface[]> {
        const queryResult: any = await this.runQuery(listTestBadges, {
            limit: 9999,
        });

        this.badges = queryResult.data.listTestBadges.items;
        this.badgesSubject$.next(this.badges);
        return queryResult;
    }

    getBadge(id) {
        return this.runQuery(getTestBadge, {badgeId: id});
    }

    async updateBadge(badge: BadgeItemInterface ) {
        const updateQuery:any = await this.runQuery(updateTestBadge, {input: badge});
        const updatedBadge = updateQuery.data.updateTestBadge;
        const badgeId = updatedBadge.badgeId;

        const index = this.badges.findIndex(item => item.badgeId === badgeId);          // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {                                                                      // FIXME [TO_DMITRY]: Move to helper.
            this.badges[index] = updatedBadge;
        }

        this.badgesSubject$.next(this.badges);
    }


    async createBadge(badge: BadgeItemInterface){
        const createQuery = await this.runQuery(createTestBadge, {input: badge});
        const createdBadge = createQuery.data.createTestBadge;

        this.badges.push(createdBadge);
        this.badgesSubject$.next(this.badges);
    }

    async deleteBadge(badgeId: string){
        const queryResult = this.runQuery(deleteTestBadge, {input: {badgeId : badgeId}});

        const index = this.badges.findIndex(item => item.badgeId === badgeId);                  // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {                                                                                 // FIXME [TO_DMITRY]: Move to helper.
            this.badges.splice(index,1);
        }
        this.badgesSubject$.next(this.badges);
        return queryResult;
    }

}
