import {CategoryItemsListInterface} from "./category-items-list.interface";

export interface CategoryItemsGraphQlResultInterface {
    data?: {
        listTestMilestoneCategories: CategoryItemsListInterface;
    };
    errors?: [object];
    extensions?: {
        [key: string]: any;
    };

}
