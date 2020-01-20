import {MilestoneItemsListInterface} from './milestone-items-list.interface';

// export interface GraphQLResult {
//     data?: object;
//     errors?: [object];
//     extensions?: {
//         [key: string]: any;
//     };
// }

export interface MilestoneItemsGraphQlResultInterface {
    data?: {
        listTestMilestones: MilestoneItemsListInterface;
    };
    errors?: [object];
    extensions?: {
        [key: string]: any;
    };

}
