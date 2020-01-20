import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {CreditPackageDataProviderService} from '../../services/credit-package/credit-package-data-provider.service';

@Component({
    selector: 'app-credit-package-edit',
    templateUrl: './credit-package-edit.page.html',
    styleUrls: ['./credit-package-edit.page.scss'],
})
export class CreditPackageEditPage implements OnInit {

    protected creditPackageEditForm: FormGroup;

    private creditPackageId;
    private name;
    private image_url;

    private sub;

    private isNew: boolean;
    protected pageTitle = '';
    protected actionInProcess = false;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private creditPackageDataService: CreditPackageDataProviderService,
                private alertController: AlertController,
                private formBuilder: FormBuilder) {

        this.creditPackageEditForm = this.formBuilder.group({
            name: ['', Validators.required],
            costUSD: [''],
            amountCredits: [''],
        });
    }

    async ngOnInit() {
        this.sub = this.route.params.subscribe(async function (params) {

            this.creditPackageId = params['creditPackageId'];

            if (this.creditPackageId !== undefined) {

                this.isNew = false;
                this.pageTitle = 'Edit Credits Package';

                const creditPackage: any = await this.creditPackageDataService.getCreditPackage(this.creditPackageId);

                if (creditPackage.data.getTestCreditPackage) {
                    const creditPackageValue = creditPackage.data.getTestCreditPackage;
                    this.creditPackageId = creditPackageValue.creditPackageId;
                    this.creditPackageEditForm.setValue({
                        name: creditPackageValue.name,
                        costUSD: creditPackageValue.costUSD,
                        amountCredits: creditPackageValue.amountCredits
                    });
                }
            } else {
                this.isNew = true;
                this.pageTitle = 'Add Credits Package';
            }
        }.bind(this));
    }

    performCancel() {
        this.location.back();
    }

    performSave() {
        this.actionInProcess = true;

        if (this.isNew) {

            const creditPackage: any = {
                name: this.creditPackageEditForm.value.name,
                costUSD: this.creditPackageEditForm.value.costUSD === '' ? null : this.creditPackageEditForm.value.costUSD,
                amountCredits: this.creditPackageEditForm.value.amountCredits === '' ? null : this.creditPackageEditForm.value.amountCredits,
            };

            this.creditPackageDataService.createCreditPackage(creditPackage).then(creditPackage => {
                this.actionInProcess = false;
            });
        } else {

            const creditPackage: any = {
                creditPackageId: this.creditPackageId,
                name: this.creditPackageEditForm.value.name,
                costUSD: this.creditPackageEditForm.value.costUSD === '' ? null : this.creditPackageEditForm.value.costUSD,
                amountCredits: this.creditPackageEditForm.value.amountCredits === ''
                    ? null
                    : this.creditPackageEditForm.value.amountCredits,
            };

            this.creditPackageDataService.updateCreditPackage(creditPackage).then(creditPackage => {
                this.actionInProcess = false;
            });
        }


        this.location.back();
    }


    async performConfirmDelete() {

        const alert = await this.alertController.create({
            header: 'Please Confirm',
            subHeader: '',
            message: 'Are you sure to delete this Credits Package? ',
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
        this.creditPackageDataService.deleteCreditPackage(this.creditPackageId);
        this.location.back();
    }
}
