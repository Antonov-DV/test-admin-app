import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {GradeDataProviderService} from '../../services/grade/grade-data-provider.service';
import {CategoryDataProviderService} from '../../services/category/category-data-provider.service';
import {MilestoneDataProviderService} from '../../services/milestone/milestone-data-provider.service';
import {LevelDataProviderService} from '../../services/level/level-data-provider.service';
import {BadgeDataProviderService} from '../../services/badge/badge-data-provider.service';
import {QuestionDataProviderService} from '../../services/question/question-data-provider.service';
import {Subject} from 'rxjs/index';
import {CommonDataProviderService} from '../../services/common/common-data-provider.service';
import {CreditPackageDataProviderService} from '../../services/credit-package/credit-package-data-provider.service';

// import {TestDataProviderService} from "../../services/test-data-service/test-data-provider.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
    protected username: any = '';
    protected gradesCount;
    protected categoriesCount;
    protected milestonesCount;
    protected levelsCount;
    protected questionsCount;
    protected badgesCount;
    protected creditPackagesCount;
    protected instructorsCount;

    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private userService: AuthService,
        private router: Router,
        private gradeDataService: GradeDataProviderService,
        private categoryDataService: CategoryDataProviderService,
        private milestoneDataService: MilestoneDataProviderService,
        private levelDataService: LevelDataProviderService,
        private questionsDataService: QuestionDataProviderService,
        private badgeDataService: BadgeDataProviderService,
        private commonDataService: CommonDataProviderService,
        private creditPackagesDataService: CreditPackageDataProviderService,
        // private TestDataService: TestDataProviderService,
    ) {
        console.log('homepage on init');
        if (this.userService.loggedIn) {
            const user = this.userService.getUser();
            console.log(user);
            this.username = user['username'];
        }
    }

    async ngOnInit() {

    }

    async ionViewWillEnter() {
        await this.initCounters3();
    }

    /**
     * v3 of get Counters
     */
    protected initCounters3() {
        this.commonDataService.getAllCounters().then(result => {
            this.gradesCount = result.countTestGrades.count;
            this.categoriesCount = result.countTestMilestoneCategories.count;
            this.milestonesCount = result.countTestMilestones.count;
            this.questionsCount = result.countTestQuestions.count;
            this.levelsCount = result.countTestLevels.count;
            this.badgesCount = result.countTestBadges.count;
            this.creditPackagesCount = result.countTestCreditPackages.count;
            this.instructorsCount = result.countTestInstructors.count;
        });
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    protected isLoggedIn() {
        return this.userService.loggedIn;
    }

    async logout() {
        await this.userService.logout();
        this.router.navigate(['/login']);
    }

}
