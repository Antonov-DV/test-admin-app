import { Injectable } from '@angular/core';
import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {countAll} from '../test-data-service/custom-queries';

@Injectable({
  providedIn: 'root'
})

export class CommonDataProviderService extends TestDataProviderService {


    /**
     * return counts for home page
     */
    async getAllCounters() {
        const queryResult: any = await this.runQuery(countAll);
        return queryResult.data;
    }

}
