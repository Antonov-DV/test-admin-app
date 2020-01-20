import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionDataProviderService} from '../../services/question/question-data-provider.service';
import {LevelDataProviderService} from '../../services/level/level-data-provider.service';
import {Subject} from 'rxjs/index';
import {takeUntil} from 'rxjs/internal/operators';
import {PreloaderComponent} from '../../components/preloader/preloader.component';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.page.html',
    styleUrls: ['./questions.page.scss'],
})

export class QuestionsPage implements OnInit, OnDestroy {

    public questionsList: Object;
    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router,
                private questionsDataProvider: QuestionDataProviderService,
                private preloader: PreloaderComponent) {
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.questionsDataProvider.questions$.pipe(takeUntil(this.destroy$)).subscribe(questions => {
            this.questionsList = questions;

            this.preloader.dismissLoader();
        });
    }

    async ionViewWillEnter() {
        this.questionsDataProvider.fetchQuestions();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    editQuestion(questionId) {
        this.router.navigate(['question-edit', {questionId: questionId}]);
    }

    createQuestion() {
        this.router.navigate(['question-create']);
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }

    getQuestionTitle(question) {
        return QuestionDataProviderService.getTitle(question);
    }

}
