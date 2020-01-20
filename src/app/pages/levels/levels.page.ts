import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelDataProviderService} from '../../services/level/level-data-provider.service';
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {PreloaderComponent} from '../../components/preloader/preloader.component';

@Component({
    selector: 'app-levels',
    templateUrl: './levels.page.html',
    styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit, OnDestroy {

    public levelsList: Object;
    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router,
                private levelDataProvider: LevelDataProviderService,
                private preloader: PreloaderComponent) {
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.levelDataProvider.levels$.pipe(takeUntil(this.destroy$)).subscribe(levels => {
            this.levelsList = levels;

            this.preloader.dismissLoader();
        });
    }

    async ionViewWillEnter() {
        this.levelDataProvider.fetchLevels();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }


    editLevel(LevelId) {
        this.router.navigate(['level-edit', LevelId]);
    }

    createLevel() {
        this.router.navigate(['level-create']);
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }

}
