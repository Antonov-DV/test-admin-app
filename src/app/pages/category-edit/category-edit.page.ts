import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {CategoryDataProviderService} from '../../services/category/category-data-provider.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GradeDataProviderService} from '../../services/grade/grade-data-provider.service';
import {combineLatest, of} from 'rxjs';
import {mergeMap} from 'rxjs/internal/operators';
import {AlertController} from '@ionic/angular';
import {MilestoneDataProviderService} from '../../services/milestone/milestone-data-provider.service';
import {PreloaderComponent} from '../../components/preloader/preloader.component';


@Component({
    selector: 'app-category-edit',
    templateUrl: './category-edit.page.html',
    styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {

    protected categoryEditForm: FormGroup;
    private categoryId;
    private name;
    private sub;
    private milestonesCount;

    protected gradesList = [];

    private isNew: boolean;
    protected pageTitle: string = '';
    protected actionInProcess = false;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private categoryDataService: CategoryDataProviderService,
                private formBuilder: FormBuilder,
                private alertController: AlertController,
                private milestoneDataService: MilestoneDataProviderService,
                private gradeDataService: GradeDataProviderService,
                private preloader: PreloaderComponent) {

        this.categoryEditForm = this.formBuilder.group({
            name: ['', Validators.required],
            gradeId: ['', Validators.required],
        });
    }


    private getCategory(): any {
        return this.route.params.pipe(
            mergeMap(params => {
                const categoryId = params.categoryId;

                if (categoryId !== undefined) {
                    return this.categoryDataService
                        .getCategory(categoryId)
                        .then(category => category.data.getTestMilestoneCategory);
                } else {
                    return of(null);
                }
            })
        );
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.sub = this.route.params.subscribe(async function (params) {

            const promise = new Promise(resolve => {
                if (this.gradesList.length === 0) {
                    this.gradeDataService.fetchGrades().then(grades => {
                        this.gradesList = this.gradeDataService.getGrades();
                        resolve(this.gradesList);
                    });
                }
                else {
                    resolve(this.gradesList);
                }
            });

            promise.then(gradesList => {

                this.categoryId = params['categoryId'];

                if (this.categoryId !== undefined) {


                    this.isNew = false;
                    this.pageTitle = 'Edit Category';


                    this.categoryDataService.getCategory(this.categoryId).then((category: any) => {
                        if (category.data.getTestMilestoneCategory) {
                            const categoryObject = category.data.getTestMilestoneCategory;
                            this.categoryId = categoryObject.categoryId;
                            this.categoryEditForm.setValue({
                                gradeId: categoryObject.gradeId,
                                name: categoryObject.name
                            });

                            this.milestoneDataService.getMilestonesByCategory(this.categoryId);
                        }
                    });
                } else {
                    this.isNew = true;
                    this.pageTitle = 'Add Category';
                }

                this.preloader.dismissLoader();

            });


        }.bind(this));

        this.milestoneDataService.milestones$.subscribe(milestones => {
            this.milestonesCount = milestones.length;
            // console.log('milestonesCount:' + this.milestonesCount);
        });
    }

    performCancel() {
        this.location.back();
    }

    performSave() {
        this.actionInProcess = true;

        if (this.isNew) {
            const category: any = {
                name: this.categoryEditForm.value.name,
                gradeId: this.categoryEditForm.value.gradeId,
            };

            this.categoryDataService.createCategory(category).then(category => {
                this.actionInProcess = false;
            });
        } else {
            const category: any = {
                categoryId: this.categoryId,
                name: this.categoryEditForm.value.name,
                gradeId: this.categoryEditForm.value.gradeId,
            };

            this.categoryDataService.updateCategory(category).then(category => {
                this.actionInProcess = false;
            });
        }

        this.location.back();
    }


    async performConfirmDelete() {

        var config = {
            header: 'Please Confirm',
            subHeader: '',
            message: 'Are you sure to delete this Category ? ',
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

        if (this.milestonesCount > 0) {
            // @ts-ignore
            config = {
                header: 'Cannot delete',
                message: 'This category has milestones assigned (' + this.milestonesCount + '). Reassign to another category or delete them first.',
                buttons: ['Ok'],
            };
        }

        const alert = await this.alertController.create(config);

        await alert.present();
    }

    performDelete() {
        this.categoryDataService.deleteCategory(this.categoryId);
        this.location.back();
    }
}
