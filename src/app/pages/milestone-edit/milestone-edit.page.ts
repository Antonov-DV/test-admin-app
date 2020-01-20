import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MilestoneDataProviderService} from '../../services/milestone/milestone-data-provider.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryDataProviderService} from '../../services/category/category-data-provider.service';
import {QuestionDataProviderService} from '../../services/question/question-data-provider.service';
import {AlertController} from '@ionic/angular';
import {Subject} from 'rxjs/index';
import {takeUntil} from 'rxjs/internal/operators';
import {PreloaderComponent} from '../../components/preloader/preloader.component';

@Component({
    selector: 'app-milestone-edit',
    templateUrl: './milestone-edit.page.html',
    styleUrls: ['./milestone-edit.page.scss'],
})
export class MilestoneEditPage implements OnInit, OnDestroy {

    public pageTitle = '';
    milestoneId: string;
    private sub: any;
    questions = [];

    protected milestoneEditForm: FormGroup;
    private name;

    private isNew: boolean;
    protected categoriesList = [];
    protected actionInProcess = false;

    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private location: Location,
                private milestoneDataService: MilestoneDataProviderService,
                private formBuilder: FormBuilder,
                private categoryDataService: CategoryDataProviderService,
                private alertController: AlertController,
                private questionDataService: QuestionDataProviderService,
                private preloader: PreloaderComponent) {

        this.milestoneEditForm = this.formBuilder.group({
            name: ['', Validators.required],
            categoryId: ['', Validators.required],
            videoUrl: [''],
        });
    }

    ngOnInit() {

        this.preloader.displayLoader();

        this.questionDataService.questions$.pipe(takeUntil(this.destroy$)).subscribe(questions => {
            this.questions = questions;
            this.sortQuestions();
        });


        this.sub = this.route.params.pipe(takeUntil(this.destroy$)).subscribe(async function (params) {

            const promise = new Promise(resolve => {
                if (this.categoriesList.length === 0) {
                    this.categoryDataService.fetchCategories().then(categories => {
                        this.categoriesList = this.categoryDataService.getCategories();
                        resolve(this.categoriesList);
                    });
                }
                else {
                    resolve(this.categoriesList);
                }
            });

            promise.then(gradesList => {

                this.milestoneId = params['milestoneId'];

                if (this.milestoneId !== undefined) {

                    this.isNew = false;
                    this.pageTitle = 'Edit Milestone';

                    let questionsPromise = this.questionDataService.getQuestionsListByMilestone(this.milestoneId);
                    let milestonePromise = this.milestoneDataService.getMilestone(this.milestoneId);

                    Promise.all([questionsPromise, milestonePromise])
                        .then(([questions, milestone]) => {
                            this.sortQuestions();
                            if (milestone.data.getTestMilestone) {
                                const milestoneObject = milestone.data.getTestMilestone;
                                this.milestoneId = milestoneObject.milestoneId;
                                this.milestoneEditForm.setValue({
                                    categoryId: milestoneObject.categoryId,
                                    name: milestoneObject.name,
                                    videoUrl: (milestoneObject.videoUrl === '') ? null : milestoneObject.videoUrl,
                                });
                            }
                        });

                } else {
                    this.isNew = true;
                    this.pageTitle = 'Add Milestone';
                }

                this.preloader.dismissLoader();
            });
        }.bind(this));
    }

    ngOnDestroy() {

        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    performCancel() {
        this.location.back();
    }

    addQuestion() {
        this.router.navigate(['question-create', {milestoneId: this.milestoneId}]);
    }

    reorderItems(indexes) {
        const element = this.questions[indexes.detail.from];
        this.questions.splice(indexes.detail.from, 1);
        this.questions.splice(indexes.detail.to, 0, element);
        this.questions.forEach((val, index) => {
            this.questions[index].position = index + 1;
        });
        this.sortQuestions();
    }

    protected sortQuestions() {
        if (this.questions.length > 0) {
            this.questions.sort(function (a, b) {
                    if (a.position < b.position) return -1;
                    if (a.position > b.position) return 1;
                    return 0;
                }
            );
        }
    }


    editQuestion(questionId) {
        this.router.navigate(['question-edit', {questionId: questionId}]);
    }

    performSave() {
        this.actionInProcess = true;

        if (this.isNew) {
            const milestone: any = {
                name: this.milestoneEditForm.value.name,
                categoryId: this.milestoneEditForm.value.categoryId,
                videoUrl: (this.milestoneEditForm.value.videoUrl === '') ? null : this.milestoneEditForm.value.videoUrl,
            };

            this.milestoneDataService.createMilestone(milestone).then(val => {
                this.actionInProcess = false;
            });
        } else {
            const milestone: any = {
                milestoneId: this.milestoneId,
                name: this.milestoneEditForm.value.name,
                categoryId: this.milestoneEditForm.value.categoryId,
                videoUrl: (this.milestoneEditForm.value.videoUrl === '') ? null : this.milestoneEditForm.value.videoUrl,
            };

            this.milestoneDataService.updateMilestone(milestone).then(milestone => {
                this.actionInProcess = false;
                this.questions.forEach((question, index) => {
                    this.questionDataService.updateQuestion(question);
                });
            });
        }

        this.location.back();
    }


    async performConfirmDelete() {

        let questionsCount = this.questions.length;
        let additionalMessage = '';

        if (questionsCount > 0) {
            additionalMessage = 'All the linked questions (' + questionsCount + ') would be deleted.';
        }

        const alert = await this.alertController.create({
            header: 'Please Confirm',
            subHeader: '',
            message: 'Are you sure to delete this Milestone ? ' + additionalMessage,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                }, {
                    text: 'Yes',
                    handler: () => this.performDelete()
                }
            ],
        });

        await alert.present();
    }


    performDelete() {
        // delete questions
        this.questions.forEach(function (question) {
            this.questionDataService.deleteQuestion(question.questionId);
        }, this);

        this.milestoneDataService.deleteMilestone(this.milestoneId);
        this.location.back();
    }


    getQuestionTitle(question) {
        return QuestionDataProviderService.getTitle(question);
    }


}
