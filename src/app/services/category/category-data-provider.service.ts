import {Injectable} from '@angular/core';
import {
    countTestGrades, countTestMilestoneCategories,
    getTestMilestoneCategory,
    listTestMilestoneCategories,
    listTestMilestones
} from '../../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {
    CategoryItemsGraphQlResultInterface
} from '../../interfaces/category-items-graph-ql-result.interface';
import {CategoryItemInterface} from '../../interfaces/category-item.interface';
import {
    createTestMilestoneCategory,
    deleteTestMilestoneCategory,
    updateTestMilestoneCategory
} from '../../../graphql/mutations';
import {Observable, Subject} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})

export class CategoryDataProviderService extends TestDataProviderService {

    protected categories: Array<CategoryItemInterface> = [];

    protected categoriesSubject$;

    public categories$;

    constructor() {
        super();
        this.categoriesSubject$ = new Subject<CategoryItemInterface[]>();
        this.categories$ = this.categoriesSubject$.asObservable();
    }

    async getCategoriesCount() {
        const queryResult: any = await this.runQuery(countTestMilestoneCategories);
        const count = queryResult.data.countTestMilestoneCategories.count;
        return count;
    }

    getCategories() {
        return this.categories;
    }

    /**
     * Return categories by grade
     * @param gradeId
     */
    public async getCategoriesByGrade(gradeId) {
        const queryResult: any = await this.runQuery(listTestMilestoneCategories, {
            filter: {
                gradeId: {
                    eq: gradeId
                }
            },
            limit: 9999,
        });

        this.categories = queryResult.data.listTestMilestoneCategories.items;
        this.sortCategories();
        this.categoriesSubject$.next(this.categories);
        return queryResult;
    }

    /**
     * Fetches categories list
     * @returns {Promise<CategoryItemInterface[]>}
     */
    async fetchCategories(): Promise<CategoryItemInterface[]> {
        const queryResult: any = await this.runQuery(listTestMilestoneCategories, {
            limit: 9999,
        });
        this.categories = queryResult.data.listTestMilestoneCategories.items;
        this.sortCategories();
        this.categoriesSubject$.next(this.categories);
        return queryResult;
    }


    getCategory(id: string) {
        return this.runQuery(getTestMilestoneCategory, {categoryId: id});
    }

    /**
     * Updates category
     * @param {CategoryItemInterface} category
     * @returns {Promise<void>}
     */
    async updateCategory(category: CategoryItemInterface) {
        const updateQuery = await this.runQuery(updateTestMilestoneCategory, {input: category});
        const updatedCategory = updateQuery.data.updateTestMilestoneCategory;
        const categoryId = updatedCategory.categoryId;
        const index = this.categories.findIndex(item => item.categoryId === categoryId);                    // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {                                                                                             // FIXME [TO_DMITRY]: Move to helper.
            this.categories[index] = updatedCategory;
        }
        this.sortCategories();
        this.categoriesSubject$.next(this.categories);
    }

    /**
     * Creates new category
     * @param {CategoryItemInterface} category
     * @returns {Promise<void>}
     */
    async createCategory(category: CategoryItemInterface) {

        const createQuery = await this.runQuery(createTestMilestoneCategory, {input: category});
        const newCategory = createQuery.data.createTestMilestoneCategory;
        this.categories.push(newCategory);
        this.sortCategories();
        this.categoriesSubject$.next(this.categories);
    }

    protected sortCategories() {
        if (this.categories.length > 0) {
            this.categories.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }
            );
        }
    }

    /**
     * Deletes category by ID
     * @param {string} categoryId
     * @returns {Promise<any>}
     */
    async deleteCategory(categoryId: string) {
        const queryResult = this.runQuery(deleteTestMilestoneCategory, {input: {categoryId: categoryId}});
        const index = this.categories.findIndex(item => item.categoryId === categoryId);                            // FIXME [TO_DMITRY]: Move to helper.

        if (index !== -1) {
            this.categories.splice(index, 1);                                                                        // FIXME [TO_DMITRY]: Move to helper.
        }
        this.sortCategories();
        this.categoriesSubject$.next(this.categories);
        return queryResult;
    }

}
