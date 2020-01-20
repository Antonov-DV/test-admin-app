import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from '@ionic/angular';
import {NavParams} from "@ionic/angular";

@Component({
    selector: 'app-modal-page',
    templateUrl: './modal-page.page.html',
    styleUrls: ['./modal-page.page.scss'],
})

export class ModalPagePage implements OnInit {

    protected testValue;

    constructor(public modalController: ModalController, private router: Router, protected params: NavParams) {
        // show on page
        this.testValue = this.params.get('value');
    }

    async ngOnInit() {
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }


    dismiss() {
        this.modalController.dismiss();
    }


}
