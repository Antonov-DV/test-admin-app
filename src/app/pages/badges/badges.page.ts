import {Component, OnDestroy, OnInit} from '@angular/core';
import {BadgeItemInterface} from '../../interfaces/badge-item.interface';
import {Router} from '@angular/router';
import {BadgeDataProviderService} from '../../services/badge/badge-data-provider.service';
import {Subject} from 'rxjs/index';
import {takeUntil} from 'rxjs/internal/operators';

@Component({
    selector: 'app-badges',
    templateUrl: './badges.page.html',
    styleUrls: ['./badges.page.scss'],
})


export class BadgesPage implements OnInit, OnDestroy {

    public badgesList: Array<BadgeItemInterface>;
    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router, private badgeDataService: BadgeDataProviderService) {
    }

    async ngOnInit() {
        this.badgeDataService.badges$.pipe(takeUntil(this.destroy$)).subscribe(badges => {
            this.badgesList = badges;
        });
    }

    async ionViewWillEnter() {
        this.badgeDataService.fetchBadges();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    editBadge(badgeId) {
        this.router.navigate(['badge-edit', badgeId]);
    }

    createBadge() {
        this.router.navigate(['badge-create']);
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }

}
