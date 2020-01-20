import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GradeDataProviderService} from '../../services/grade/grade-data-provider.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';
import {CategoryDataProviderService} from '../../services/category/category-data-provider.service';
import {PreloaderComponent} from '../../components/preloader/preloader.component';

@Component({
    selector: 'app-grade-edit',
    templateUrl: './grade-edit.page.html',
    styleUrls: ['./grade-edit.page.scss'],
})
export class GradeEditPage implements OnInit, OnDestroy {
    private sub: any;
    protected gradeEditForm: FormGroup;
    private gradeId;
    private name;
    private categoriesCount;

    private isNew: boolean;
    protected pageTitle: string = '';
    protected actionInProcess = false;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private gradeDataService: GradeDataProviderService,
                private categoryDataService: CategoryDataProviderService,
                private alertController: AlertController,
                private formBuilder: FormBuilder,
                private preloader: PreloaderComponent) {

        this.gradeEditForm = this.formBuilder.group({
            name: ['', Validators.required],
            vocabularyUrl: ['']
        });
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.sub = this.route.params.subscribe(params => {
            this.gradeId = params['gradeId'];
        });

        this.sub = this.route.params.subscribe(async function (params) {
            this.gradeId = params['gradeId'];

            if (this.gradeId !== undefined) {

                this.isNew = false;
                this.pageTitle = 'Edit Grade';

                const grade: any = await this.gradeDataService.getGrade(params['gradeId']);
                if (grade.data.getTestGrade) {
                    const gradeValue = grade.data.getTestGrade;
                    this.gradeId = gradeValue.gradeId;
                    this.gradeEditForm.setValue({
                        name: gradeValue.name,
                        vocabularyUrl: gradeValue.vocabularyUrl
                    });
                }

                this.categoryDataService.getCategoriesByGrade(this.gradeId);

            } else {
                this.isNew = true;
                this.pageTitle = 'Add Grade';
            }

            await this.preloader.dismissLoader();

        }.bind(this));

        this.categoryDataService.categories$.subscribe(categories => {
            this.categoriesCount = categories.length;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    performCancel() {
        this.location.back();
    }

    performSave() {
        this.actionInProcess = true;
        if (this.isNew) {
            const grade: any = {
                name: this.gradeEditForm.value.name,
                vocabularyUrl: (this.gradeEditForm.value.vocabularyUrl) === '' ? null : this.gradeEditForm.value.vocabularyUrl
            };

            this.gradeDataService.createGrade(grade).then(grade => {
                this.actionInProcess = false;
            });
        } else {
            const grade: any = {
                gradeId: this.gradeId,
                name: this.gradeEditForm.value.name,
                vocabularyUrl: (this.gradeEditForm.value.vocabularyUrl) === '' ? null : this.gradeEditForm.value.vocabularyUrl
            };

            this.gradeDataService.updateGrade(grade).then(grade => {
                this.actionInProcess = false;
            });
        }

        this.location.back();
    }

    async performConfirmDelete() {

        let config = {
            header: 'Please Confirm',
            subHeader: '',
            message: 'Are you sure to delete this Grade ? ',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                }, {
                    text: 'Yes',
                    handler: () => this.performDelete()
                }
            ],
        };

        if (this.categoriesCount > 0) {
            // @ts-ignore
            config = {
                header: 'Cannot delete',
                message: 'This grade has milestone categories assigned (' + this.categoriesCount + '). Reassign to another grade or delete them first.',
                buttons: ['Ok'],
            };
        }

        const alert = await this.alertController.create(config);

        await alert.present();
    }


    performDelete() {
        this.gradeDataService.deleteGrade(this.gradeId);
        this.location.back();
    }
}
