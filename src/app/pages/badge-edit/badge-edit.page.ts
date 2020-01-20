import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {BadgeDataProviderService} from "../../services/badge/badge-data-provider.service";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-badge-edit',
    templateUrl: './badge-edit.page.html',
    styleUrls: ['./badge-edit.page.scss'],
})

export class BadgeEditPage implements OnInit {

    protected badgeEditForm: FormGroup;

    private badgeId;
    private name;
    private image_url;

    private sub;

    private isNew: boolean;
    protected pageTitle: string = '';
    protected actionInProcess = false;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private badgeDataService: BadgeDataProviderService,
                private alertController: AlertController,
                private formBuilder: FormBuilder) {

        this.badgeEditForm = this.formBuilder.group({
            name: ['', Validators.required],
            imageUrl: [''],
            maxMinutes: [''],
            minCorrectAnswers: [''],
            minHelpersUse: [''],
        });
    }

    async ngOnInit() {
        this.sub = this.route.params.subscribe(async function (params) {

            this.badgeId = params['badgeId'];

            if (this.badgeId !== undefined) {

                this.isNew = false;
                this.pageTitle = 'Edit Badge';

                const badge: any = await this.badgeDataService.getBadge(this.badgeId);

                if (badge.data.getTestBadge) {
                    const badgeValue = badge.data.getTestBadge;
                    this.badgeId = badgeValue.badgeId;
                    this.badgeEditForm.setValue({
                        name: badgeValue.name,
                        imageUrl: badgeValue.imageUrl,
                        maxMinutes: badgeValue.maxMinutes,
                        minCorrectAnswers: badgeValue.minCorrectAnswers,
                        minHelpersUse: badgeValue.minHelpersUse,
                    });
                }
            } else {
                this.isNew = true;
                this.pageTitle = 'Add Badge';
            }
        }.bind(this));
    }

    performCancel() {
        this.location.back();
    }

    performSave() {
        this.actionInProcess = true;

        if (this.isNew) {

            const badge: any = {
                name: this.badgeEditForm.value.name,
                imageUrl: this.badgeEditForm.value.imageUrl === '' ? null : this.badgeEditForm.value.imageUrl,
                maxMinutes: this.badgeEditForm.value.maxMinutes === '' ? null : this.badgeEditForm.value.maxMinutes,
                minCorrectAnswers: this.badgeEditForm.value.minCorrectAnswers === '' ? null : this.badgeEditForm.value.minCorrectAnswers,
                minHelpersUse: this.badgeEditForm.value.minHelpersUse === '' ? null : this.badgeEditForm.value.minHelpersUse,
            };

            this.badgeDataService.createBadge(badge).then(badge => {
                this.actionInProcess = false;
            });
        } else {

            const badge: any = {
                badgeId: this.badgeId,
                name: this.badgeEditForm.value.name,
                imageUrl: this.badgeEditForm.value.imageUrl === '' ? null : this.badgeEditForm.value.imageUrl,
                maxMinutes: this.badgeEditForm.value.maxMinutes === '' ? null : this.badgeEditForm.value.maxMinutes,
                minCorrectAnswers: this.badgeEditForm.value.minCorrectAnswers === '' ? null : this.badgeEditForm.value.minCorrectAnswers,
                minHelpersUse: this.badgeEditForm.value.minHelpersUse === '' ? null : this.badgeEditForm.value.minHelpersUse,
            };

            this.badgeDataService.updateBadge(badge).then(badge => {
                this.actionInProcess = false;
            });
        }


        this.location.back();
    }


    async performConfirmDelete() {

        const alert = await this.alertController.create({
            header: 'Please Confirm',
            subHeader: '',
            message: 'Are you sure to delete this Badge ? ',
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
        this.badgeDataService.deleteBadge(this.badgeId);
        this.location.back();
    }


}
