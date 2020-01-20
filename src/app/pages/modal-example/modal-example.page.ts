import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.page.html',
  styleUrls: ['./modal-example.page.scss'],
})
export class ModalExamplePage implements OnInit {

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalPagePage,
            componentProps: {
                value: 123,
                modalTitle: "Simple Modal"
            },
        });

        return await modal.present();
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }

}
