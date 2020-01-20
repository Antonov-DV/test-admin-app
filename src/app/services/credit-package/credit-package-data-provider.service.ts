import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {Subject} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {CreditPackageItemInterface} from '../../interfaces/credit-package.interface';
import {countTestCreditPackages, getTestCreditPackage, listTestCreditPackages} from '../../../graphql/queries';
import {createTestCreditPackage, deleteTestCreditPackage, updateTestCreditPackage} from '../../../graphql/mutations';

@Injectable({
    providedIn: 'root'
})

export class CreditPackageDataProviderService extends TestDataProviderService {

    protected creditPackages: Array<CreditPackageItemInterface> = [];

    protected creditPackagesSubject$;

    public creditPackages$;

    init() {
        this.creditPackagesSubject$ = new Subject<CreditPackageItemInterface[]>();
        this.creditPackages$ = this.creditPackagesSubject$.asObservable();
    }

    async getCreditPackagesCount() {
        const queryResult: any = await this.runQuery(countTestCreditPackages);
        const count = queryResult.data.countTestCreditPackages.count;
        return count;
    }


    public getCreditPackages() {
        return this.creditPackages;
    }

    async fetchCreditPackages(): Promise<CreditPackageItemInterface[]> {
        const queryResult: any = await this.runQuery(listTestCreditPackages, {
            limit: 9999,
        });

        if (queryResult.data.listTestCreditPackages !== undefined) {
            this.creditPackages = queryResult.data.listTestCreditPackages.items;
        } else {
            this.creditPackages = null;
        }

        this.creditPackagesSubject$.next(this.creditPackages);
        return queryResult;
    }

    getCreditPackage(id) {
        return this.runQuery(getTestCreditPackage, {creditPackageId: id});
    }

    async updateCreditPackage(creditPackage: CreditPackageItemInterface) {
        const updateQuery: any = await this.runQuery(updateTestCreditPackage, {input: creditPackage});
        const updatedcreditPackage = updateQuery.data.updateTestCreditPackage;
        const creditPackageId = updatedcreditPackage.creditPackageId;

        const index = this.creditPackages.findIndex(item => item.creditPackageId === creditPackageId);

        if (index !== -1) {
            this.creditPackages[index] = updatedcreditPackage;
        }

        this.creditPackagesSubject$.next(this.creditPackages);
    }


    async createCreditPackage(creditPackage: CreditPackageItemInterface) {
        const createQuery = await this.runQuery(createTestCreditPackage, {input: creditPackage});
        const createdcreditPackage = createQuery.data.createTestCreditPackage;

        this.creditPackages.push(createdcreditPackage);
        this.creditPackagesSubject$.next(this.creditPackages);
    }

    async deleteCreditPackage(creditPackageId: string) {
        const queryResult = this.runQuery(deleteTestCreditPackage, {input: {creditPackageId: creditPackageId}});

        const index = this.creditPackages.findIndex(item => item.creditPackageId === creditPackageId);

        if (index !== -1) {
            this.creditPackages.splice(index, 1);
        }
        this.creditPackagesSubject$.next(this.creditPackages);
        return queryResult;
    }

}
