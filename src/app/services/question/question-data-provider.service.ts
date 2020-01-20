import {Injectable} from '@angular/core';
import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {
    countTestLevels, countTestQuestions,
    getTestQuestion, getTestQuestionFull,
    getTestQuestionOption,
    listTestQuestionOptions,
    listTestQuestions
} from '../../../graphql/queries';
import {Subject} from 'rxjs/index';
import {QuestionItemInterface} from '../../interfaces/question-item.interface';
import {
    createTestQuestion,
    createTestQuestionOption,
    deleteTestQuestion,
    updateTestQuestion, updateTestQuestionOption
} from '../../../graphql/mutations';
import {query} from '@angular/core/src/render3/query';


@Injectable({
    providedIn: 'root'
})
export class QuestionDataProviderService extends TestDataProviderService {

    public questions: Array<QuestionItemInterface> = [];
    protected questionsSubject$;

    public questions$;


    init() {
        this.questionsSubject$ = new Subject<QuestionItemInterface[]>();
        this.questions$ = this.questionsSubject$.asObservable();
    }

    async getQuestionsCount() {
        const queryResult: any = await this.runQuery(countTestQuestions);
        const count = queryResult.data.countTestQuestions.count;
        return count;
    }


    public async getQuestionsList() {
        return await this.runQuery(listTestQuestions, {
            limit: 9999,
        });
    }

    public async getQuestionsListByMilestone(milestoneId) {
        const queryResult: any = await this.runQuery(listTestQuestions, {
            filter: {
                milestoneId: {
                    eq: milestoneId
                }
            },
            limit: 9999,
        });

        this.questions = queryResult.data.listTestQuestions.items;
        this.sortQuestions();
        this.questionsSubject$.next(this.questions);
        return queryResult;
    }


    getQuestions() {
        return this.questions;
    }

    async fetchQuestions(): Promise<QuestionItemInterface[]> {
        const queryResult: any = await this.runQuery(listTestQuestions, {
            limit: 9999,
        });

        this.questions = queryResult.data.listTestQuestions.items;
        this.sortQuestions();
        this.questionsSubject$.next(this.questions);
        return queryResult;
    }

    getQuestion(id: string) {
        return this.runQuery(getTestQuestion, {questionId: id});
    }

    async getQuestionFull(questionId: string) {
        const queryResult = await this.runQuery(getTestQuestionFull, {questionId: questionId});
        return queryResult.data.getTestQuestionFull;
    }


    getQuestionOptions(questionId: string) {
        return this.runQuery(listTestQuestionOptions, {
            filter: {
                questionId: {eq: questionId}
            },
            limit: 100
        });
    }

    async createQuestionOption(option: any) {
        const createQuery = await this.runQuery(createTestQuestionOption, {input: option});
        const newOption = createQuery.data.createTestQuestionOption;
        return newOption;
    }

    async updateQuestionOption(option: any) {
        const updateQuery = await this.runQuery(updateTestQuestionOption, {input: option});
        const updatedOption = updateQuery.data.updateTestQuestionOption;
        return updatedOption;
    }

    deleteQuestionOption(OptionId) {
        return this.runQuery(deleteTestQuestion, {input: {OptionId: OptionId}});
    }

    async updateQuestion(question: QuestionItemInterface) {
        const updateQuery = await this.runQuery(updateTestQuestion, {input: question});
        const updatedQuestion = updateQuery.data.updateTestQuestion;
        const questionId = updatedQuestion.questionId;
        const index = this.questions.findIndex(item => item.questionId === questionId);

        if (index !== -1) {
            this.questions[index] = updatedQuestion;
        }
        this.sortQuestions();
        this.questionsSubject$.next(this.questions);
        return updatedQuestion;
    }

    /**
     *
     * @param {QuestionItemInterface} question
     * @returns {Promise<{__typename: "TestQuestion"; questionId: string; milestoneId: string; levelName: string; solution: string; text: string; videoUrl: string; vocabularyUrl: string; position: number}>}
     */
    async createQuestion(question: QuestionItemInterface) {
        const createQuery = await this.runQuery(createTestQuestion, {input: question});
        const newQuestion = createQuery.data.createTestQuestion;

        this.questions.push(newQuestion);
        this.sortQuestions();
        this.questionsSubject$.next(this.questions);
        return newQuestion;
    }

    protected sortQuestions() {
        if (this.questions.length > 0) {
            this.questions.sort(function (a, b) {
                    if (a.text < b.text) return -1;
                    if (a.text > b.text) return 1;
                    return 0;
                }
            );
        }
    }

    /**
     * Deletes question by ID
     * @param {string} questionId
     * @returns {Promise<any>}
     */
    async deleteQuestion(questionId: string) {
        const queryResult = this.runQuery(deleteTestQuestion, {input: {questionId: questionId}});
        const index = this.questions.findIndex(item => item.questionId === questionId);

        if (index !== -1) {
            this.questions.splice(index, 1);
        }

        this.sortQuestions();
        this.questionsSubject$.next(this.questions);
        return queryResult;
    }

    /**
     * Return titles for question list
     * @param question
     */
    public static getTitle(question) {

        let maxlen = 100;
        let text = question.text;

        text = text.replace(/<[^>]+>/g, ' ');
        text = text.slice(0, maxlen);

        return text;
    }

}
