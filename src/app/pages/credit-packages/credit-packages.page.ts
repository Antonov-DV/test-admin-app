import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/index';
import {takeUntil} from 'rxjs/internal/operators';
import {CreditPackageItemInterface} from '../../interfaces/credit-package.interface';
import {CreditPackageDataProviderService} from '../../services/credit-package/credit-package-data-provider.service';

@Component({
  selector: 'credit-packages',
  templateUrl: './credit-packages.page.html',
  styleUrls: ['./credit-packages.page.scss'],
})
export class CreditPackagesPage implements OnInit, OnDestroy {

    public creditPackagesList: Array<CreditPackageItemInterface>;
    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router, private creditPackageDataService: CreditPackageDataProviderService) {
    }

    async ngOnInit() {
        this.creditPackageDataService.creditPackages$.pipe(takeUntil(this.destroy$)).subscribe(creditPackages => {
            this.creditPackagesList = creditPackages;
        });
    }

    async ionViewWillEnter() {
        this.creditPackageDataService.fetchCreditPackages();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    editCreditPackage(creditPackageId) {
        this.router.navigate(['credit-package-edit', creditPackageId]);
    }

    createCreditPackage() {
        this.router.navigate(['credit-package-create']);
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }
}
