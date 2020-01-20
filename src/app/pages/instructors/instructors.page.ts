import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {InstructorDataProviderService} from '../../services/instructor/instructor-data-provider.service';
import {takeUntil} from 'rxjs/operators';
import {InstructorItemInterface} from '../../interfaces/instructor-item.interface';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.page.html',
  styleUrls: ['./instructors.page.scss'],
})
export class InstructorsPage implements OnInit, OnDestroy {

    public instructorsList: Array<InstructorItemInterface>;
    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router, private instructorDataService: InstructorDataProviderService) {
    }

    async ngOnInit() {
        this.instructorDataService.instructors$.pipe(takeUntil(this.destroy$)).subscribe(instructors => {
            this.instructorsList = instructors;
        });
    }

    async ionViewWillEnter() {
        this.instructorDataService.fetchInstructors();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    editInstructor(instructorId) {
        this.router.navigate(['instructor-edit', instructorId]);
    }

    createInstructor() {
        this.router.navigate(['instructor-create']);
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }

}
