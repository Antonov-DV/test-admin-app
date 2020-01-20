import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GradeDataProviderService} from '../../services/grade/grade-data-provider.service';
import {GradeItemsListInterface} from '../../interfaces/grade-items-list.interface';
import {GradeItemInterface} from '../../interfaces/grade-item.interface';
import {Subject} from 'rxjs/index';
import {takeUntil} from 'rxjs/internal/operators';
import {LoadingController} from '@ionic/angular';
import {PreloaderComponent} from '../../components/preloader/preloader.component';

@Component({
    selector: 'app-grades',
    templateUrl: './grades.page.html',
    styleUrls: ['./grades.page.scss'],
})
export class GradesPage implements OnInit, OnDestroy {

    public gradesList: Array<GradeItemInterface>;

    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router,
                private gradesDataService: GradeDataProviderService,
                private preloader: PreloaderComponent) {
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.gradesDataService.grades$.pipe(takeUntil(this.destroy$)).subscribe(grades => {
            this.gradesList = grades;
            this.preloader.dismissLoader();
        });
    }

    async ionViewWillEnter() {
        this.gradesDataService.fetchGrades();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    editGrade(gradeId) {
        this.router.navigate(['grade-edit', gradeId]);
    }

    createGrade() {
        this.router.navigate(['grade-create']);
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }
}
