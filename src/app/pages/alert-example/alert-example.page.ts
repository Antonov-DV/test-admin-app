import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-alert-example',
    templateUrl: './alert-example.page.html',
    styleUrls: ['./alert-example.page.scss'],
})
export class AlertExamplePage implements OnInit {

    constructor(private router: Router, public alertController: AlertController) {
    }

    ngOnInit() {
    }


    backToMainMenu() {
        this.router.navigate(['home']);
    }

    async presentSimple() {
        const alert = await this.alertController.create({
            header: 'Header',
            subHeader: 'subheader',
            message: 'this is an alert message',
            buttons: ['ok'],

        });

        await alert.present();
    }

    async presentConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirm',
            subHeader: '',
            message: 'Are you sure to do something ? ',
            buttons: [{
                    text: 'No',
                    role: 'cancel',
                },{
                    text: 'Yes',
                    handler: () => this.deleteSomething()
                    // handler: () => {
                    //     console.log('confirm deletion');
                    // }
                }],
        });

        await alert.present();
    }

    deleteSomething(){
        console.log('delete something');
    }

}
