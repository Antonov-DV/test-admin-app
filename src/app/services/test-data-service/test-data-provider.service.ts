import {API, graphqlOperation} from 'aws-amplify';
import {countTestBadges} from "../../../graphql/queries";
import {countAll} from "./custom-queries";

export abstract class TestDataProviderService {

    constructor() {
        this.init();
    }

    public init() {
    }

    public runQuery(query: any, variables?: {}): any {
        return API.graphql(graphqlOperation(query, variables));
    }

}
