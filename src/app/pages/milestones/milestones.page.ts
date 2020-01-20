import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MilestoneDataProviderService} from '../../services/milestone/milestone-data-provider.service';
import {MilestoneItemInterface} from '../../interfaces/milestone-item.interface';
import {Subject} from 'rxjs/index';
import {takeUntil} from 'rxjs/internal/operators';
import {PreloaderComponent} from '../../components/preloader/preloader.component';


@Component({
    selector: 'app-milestones',
    templateUrl: './milestones.page.html',
    styleUrls: ['./milestones.page.scss'],
})
export class MilestonesPage implements OnInit, OnDestroy {

    public milestonesList: Array<MilestoneItemInterface>;
    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router,
                private milestonesDataService: MilestoneDataProviderService,
                private preloader: PreloaderComponent) {
    }

    async ngOnInit() {
        await this.preloader.displayLoader();

        this.milestonesDataService.milestones$.pipe(takeUntil(this.destroy$)).subscribe(milestones => {
            this.milestonesList = milestones;

            this.preloader.dismissLoader();
        });
    }

    async ionViewWillEnter() {
        this.milestonesDataService.fetchMilestones();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    editMilestone(milestoneId) {
        this.router.navigate(['milestone-edit', milestoneId]);
    }

    createMilestone() {
        this.router.navigate(['milestone-create']);
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }
}
