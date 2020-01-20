import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {InstructorDataProviderService} from '../../services/instructor/instructor-data-provider.service';
import {AlertController} from '@ionic/angular';
import {CreditPackageDataProviderService} from '../../services/credit-package/credit-package-data-provider.service';

@Component({
    selector: 'app-instructor-edit',
    templateUrl: './instructor-edit.page.html',
    styleUrls: ['./instructor-edit.page.scss'],
})

export class InstructorEditPage implements OnInit {

    protected instructorEditForm: FormGroup;

    private instructorId;
    private instructorOldData;
    private name;
    private image_url;

    private sub;

    private isNew: boolean;
    protected pageTitle = '';
    protected actionInProcess = false;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private instructorDataService: InstructorDataProviderService,
                private alertController: AlertController,
                private formBuilder: FormBuilder) {

        this.instructorEditForm = this.formBuilder.group({
            email: ['', Validators.required],
            phone: [''],
            firstName: [''],
            lastName: [''],
            creditsBalance: [''],
        });
    }

    async ngOnInit() {
        this.sub = this.route.params.subscribe(async function (params) {

            this.instructorId = params['instructorId'];

            if (this.instructorId !== undefined) {

                this.isNew = false;
                this.pageTitle = 'Edit Credits Package';

                const instructor: any = await this.instructorDataService.getInstructor(this.instructorId);

                if (instructor.data.getTestUser) {
                    const instructorValue = instructor.data.getTestUser;
                    this.instructorOldData = instructorValue;

                    this.instructorId = instructorValue.instructorId;
                    this.instructorEditForm.setValue({
                        email: instructorValue.email,
                        phone: instructorValue.phone,
                        firstName: instructorValue.firstName,
                        lastName: instructorValue.lastName,
                        creditsBalance: instructorValue.creditsBalance,
                    });
                }
            } else {
                this.isNew = true;
                this.pageTitle = 'Edit Instructor';
            }
        }.bind(this));
    }

    performCancel() {
        this.location.back();
    }

    performSave() {
        this.actionInProcess = true;

        const instructor: any = {...this.instructorOldData};
        instructor.email = this.instructorEditForm.value.email;
        instructor.phone = this.instructorEditForm.value.phone;
        instructor.firstName = this.instructorEditForm.value.firstName;
        instructor.lastName =  this.instructorEditForm.value.lastName;
        instructor.creditsBalance = this.instructorEditForm.value.creditsBalance;

        this.instructorDataService.updateInstructor(instructor).then(instructor => {
            this.actionInProcess = false;
        });


        this.location.back();
    }
}
