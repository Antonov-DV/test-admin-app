import {Component, OnDestroy, OnInit, Sanitizer, SecurityContext} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {QuestionDataProviderService} from '../../services/question/question-data-provider.service';
import {MilestoneDataProviderService} from '../../services/milestone/milestone-data-provider.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LevelDataProviderService} from '../../services/level/level-data-provider.service';
import {QuestionItemInterface} from '../../interfaces/question-item.interface';
import {AlertController} from '@ionic/angular';
import {MilestoneItemInterface} from '../../interfaces/milestone-item.interface';
import {LevelItemInterface} from '../../interfaces/level-item.interface';
import {CustomSelectOption} from '../../components/custom-select/custom-select-option.class';
import {PreloaderComponent} from '../../components/preloader/preloader.component';

@Component({
    selector: 'app-question-edit',
    templateUrl: './question-edit.page.html',
    styleUrls: ['./question-edit.page.scss', '../../components/imperavi-editor/core/_scss/redactor.scss'],
})
export class QuestionEditPage implements OnInit, OnDestroy {

    questionId: string;
    private commonDataSubscription: any;
    protected questionEditForm: FormGroup;
    public isNew: boolean;
    public isLoading: boolean;
    protected milestonesList = [];
    protected milestonesOptionsList: Array<CustomSelectOption>;
    protected levelsList = [];
    protected milestoneId;
    protected question;
    protected actionInProcess = false;
    protected optionsList;
    protected correctOptionId = '';

    constructor(private route: ActivatedRoute,
                private location: Location,
                private questionDataService: QuestionDataProviderService,
                private milestoneDataProvider: MilestoneDataProviderService,
                private levelDataProvider: LevelDataProviderService,
                private alertController: AlertController,
                private formBuilder: FormBuilder,
                private sanitizer: Sanitizer,
                private preloader: PreloaderComponent) {

        this.isNew = true;
        this.isLoading = true;

        const formOptionsArray = new FormArray([]);

        this.questionEditForm = this.formBuilder.group({
            milestoneId: ['', Validators.required],
            text: ['', Validators.required],
            levelId: ['', Validators.required],
            solution: ['', Validators.required],
            shortSolution: [''],
            videoUrl: [''],
            correctOptionId: ['', Validators.required],
            optionsArray: formOptionsArray,
        });
    }

    async ngOnInit() {

        await this.preloader.displayLoader();
    }

    ngOnDestroy() {

        this.commonDataSubscription.unsubscribe();
    }

    ionViewDidLeave() {
        this.questionEditForm.reset();
    }

    ionViewWillEnter() {

        const optionsData = this.prepareOptions();

        optionsData.forEach((value, index) => {
            (this.questionEditForm.controls.optionsArray as any).push(new FormControl('', Validators.required));
        });

        this.optionsList = optionsData;

        this.commonDataSubscription = this.route.paramMap.subscribe(async function (params) {
            this.initCommonPromise(params);
        }.bind(this));
    }

    private initCommonPromise(routeParams) {
        Promise.all([this.getMilestonesPromise(), this.getLevelsPromise()]).then(async ([milestones, levels]) => {
            let options = [];

            this.milestonesList = <MilestoneItemInterface[]> milestones;

            this.milestonesOptionsList = this.milestonesList.map((value, index, array) => {
                return {
                    value: value.milestoneId,
                    label: value.name,
                };
            });

            this.levelsList = <LevelItemInterface[]> levels;

            this.questionId = routeParams.get('questionId');

            if (this.questionId !== null) {

                this.isNew = false;

                this.question = await this.questionDataService.getQuestionFull(this.questionId);

                this.optionsList = this.prepareOptions(this.sortOptions(this.question.options));

                const optionsValues = [];
                this.optionsList.forEach((value, index) => {
                    optionsValues.push(value.text);
                });

                this.questionEditForm.patchValue({
                    text: this.question.text,
                    milestoneId: this.question.milestoneId,
                    levelId: this.question.levelName,
                    solution: this.question.solution,
                    shortSolution: this.question.shortSolution,
                    videoUrl: this.question.videoUrl,
                    correctOptionId: this.correctOptionId,
                    optionsArray: optionsValues
                }, {emitEvent: true});


            } else {

                if (routeParams.get('milestoneId')) {
                    this.milestoneId = routeParams.get('milestoneId');

                    this.questionEditForm.patchValue({
                        text: '',
                        milestoneId: this.milestoneId,
                        levelId: '',
                        solution: '',
                        shortSolution: '',
                        videoUrl: '',
                        correctOptionId: this.correctOptionId,
                        optionsArray: ['', '', '', '']
                    });
                }
            }

            this.preloader.dismissLoader();
        });
    }

    private getMilestonesPromise() {
        return new Promise(resolve => {
            if (this.milestonesList.length === 0) {
                this.milestoneDataProvider.fetchMilestones().then(milestones => {

                    this.milestonesList = this.milestoneDataProvider.getMilestones();

                    resolve(this.milestonesList);
                });
            } else {
                resolve(this.milestonesList);
            }
        });
    }

    private getLevelsPromise() {
        return new Promise(resolve => {
            if (this.levelsList.length === 0) {
                this.levelDataProvider.fetchLevels().then(milestones => {
                    this.levelsList = this.levelDataProvider.getLevels();
                    resolve(this.levelsList);
                });
            } else {
                resolve(this.levelsList);
            }
        });
    }


    prepareOptions(options?: Array<any>) {

        if (options === undefined) {
            options = [];
        }

        while (options.length < 4) {
            options.push({});
        }
        options.forEach((value, index) => {

            options[index].ordering = String.fromCharCode('a'.charCodeAt(0) + index).toUpperCase();

            if (value.isCorrect) {
                this.correctOptionId = options[index].ordering;
            }
        });
        return options;
    }

    sortOptions(options: Array<any>) {
        if (options !== undefined && options.length > 0) {
            options.sort(function (a, b) {
                    if (a.position < b.position) return -1;
                    if (a.position > b.position) return 1;
                    return 0;
                }
            );
        }
        return options;
    }


    performCancel() {

        this.location.back();
    }

    performSave() {
        this.actionInProcess = true;

        if (this.isNew) {
            const questions: any = this.questionDataService.getQuestions();
            const text = this.questionEditForm.value.text;
            const solution = this.questionEditForm.value.solution;
            const position = questions.length + 1;
            const question: any = {
                milestoneId: this.questionEditForm.value.milestoneId,
                text: text,
                levelName: this.questionEditForm.value.levelId,
                solution: solution,
                shortSolution: this.questionEditForm.value.shortSolution,
                position: position,
            };
            const questionOptions = this.questionEditForm.value.optionsArray;
            const correctAnswerOptionId = this.questionEditForm.value.correctOptionId;

            if (this.questionEditForm.value.videoUrl) {
                question.videoUrl = this.questionEditForm.value.videoUrl;
            }


            this.questionDataService.createQuestion(question).then((question: QuestionItemInterface) => {
                const questionId = question.questionId;
                questionOptions.forEach((value, index) => {
                    const ordering = String.fromCharCode('a'.charCodeAt(0) + index).toUpperCase();
                    const optionsObjectToSave = {
                        questionId: questionId,
                        isCorrect: (ordering === correctAnswerOptionId) ? 'true' : 'false',
                        text: value,
                        position: +index + 1
                    };
                    this.questionDataService.createQuestionOption(optionsObjectToSave);
                });
                this.actionInProcess = false;
            });
        } else {

            const question: any = {
                questionId: this.questionId,
                milestoneId: this.sanitizer.sanitize(SecurityContext.HTML, this.questionEditForm.value.milestoneId),
                text: this.questionEditForm.value.text,
                levelName: this.sanitizer.sanitize(SecurityContext.HTML, this.questionEditForm.value.levelId),
                solution: this.questionEditForm.value.solution,
                shortSolution: this.questionEditForm.value.shortSolution,
                position: parseInt(this.question.position),
                videoUrl: (this.questionEditForm.value.videoUrl === '') ? null : this.questionEditForm.value.videoUrl,
            };
            const questionOptions = this.questionEditForm.value.optionsArray;
            const correctAnswerOptionId = this.questionEditForm.value.correctOptionId;


            this.questionDataService.updateQuestion(question).then((question: QuestionItemInterface) => {
                const questionId = question.questionId;
                questionOptions.forEach((value, index) => {
                    const ordering = String.fromCharCode('a'.charCodeAt(0) + index).toUpperCase();
                    const optionsObjectToSave = {
                        questionId: questionId,
                        isCorrect: (ordering === correctAnswerOptionId) ? 'true' : 'false',
                        text: value,
                        position: +index + 1
                    };
                    if (this.optionsList[index].optionId) {

                        optionsObjectToSave['optionId'] = this.optionsList[index].optionId;
                        this.questionDataService.updateQuestionOption(optionsObjectToSave);

                    } else {
                        this.questionDataService.createQuestionOption(optionsObjectToSave);
                    }
                });
                this.actionInProcess = false;
            });
        }

        this.location.back();
    }

    async performConfirmDelete() {

        const alert = await this.alertController.create({
            header: 'Please Confirm',
            subHeader: '',
            message: 'Are you sure to delete this Question ? ',
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
        this.questionDataService.deleteQuestion(this.questionId);
        this.location.back();
    }

}
