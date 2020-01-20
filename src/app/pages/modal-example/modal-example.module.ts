import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ModalExamplePage} from './modal-example.page';
import {ModalPagePage} from "../modal-page/modal-page.page";

const routes: Routes = [
    {
        path: '',
        component: ModalExamplePage
    }
];

@NgModule({
    entryComponents: [
        ModalPagePage,
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ModalExamplePage, ModalPagePage]
})

export class ModalExamplePageModule {
}
