import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LevelDataProviderService} from '../../services/level/level-data-provider.service';
import {AlertController} from '@ionic/angular';
import {PreloaderComponent} from '../../components/preloader/preloader.component';

@Component({
    selector: 'app-level-edit',
    templateUrl: './level-edit.page.html',
    styleUrls: ['./level-edit.page.scss'],
})
export class LevelEditPage implements OnInit {

    protected levelEditForm: FormGroup;
    private levelName: string;
    private sub;
    private isNew: boolean;
    protected pageTitle: string = '';
    protected actionInProcess = false;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private levelDataService: LevelDataProviderService,
                private alertController: AlertController,
                private formBuilder: FormBuilder,
                private preloader: PreloaderComponent) {

        this.levelEditForm = this.formBuilder.group({
            levelName: ['', Validators.required],
            points: ['', Validators.required]
        });
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.sub = this.route.params.subscribe(async function (params) {

            this.levelName = params['levelName'];

            if (this.levelName !== undefined) {

                this.isNew = false;
                this.pageTitle = 'Edit Level';

                const level: any = await this.levelDataService.getLevel(this.levelName);

                if (level.data.getTestLevel) {
                    const levelValue = level.data.getTestLevel;
                    this.levelName = levelValue.levelName;
                    this.levelEditForm.setValue({
                        levelName: levelValue.levelName,
                        points: levelValue.points,
                    });
                }
            } else {
                this.isNew = true;
                this.pageTitle = 'Add Level';
            }

            this.preloader.dismissLoader();

        }.bind(this));
    }

    performCancel() {
        this.location.back();
    }

    performSave() {
        this.actionInProcess = true;
        const level: any = {
            levelName: this.levelEditForm.value.levelName,
            points: this.levelEditForm.value.points
        };

        if (this.isNew) {
            this.levelDataService.createLevel(level).then(level => {
                this.actionInProcess = false;
            });
        } else {
            this.levelDataService.updateLevel(level).then(level => {
                this.actionInProcess = false;
            });
        }

        this.location.back();
    }


    async performConfirmDelete() {

        const alert = await this.alertController.create({
            header: 'Please Confirm',
            subHeader: '',
            message: 'Are you sure to delete this Level ? ',
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
        this.levelDataService.deleteLevel(this.levelName);
        this.location.back();
    }

}
