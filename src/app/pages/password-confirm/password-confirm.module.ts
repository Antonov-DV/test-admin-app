import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PasswordConfirmPage} from './password-confirm.page';

const routes: Routes = [
    {
        path: '',
        component: PasswordConfirmPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    declarations: [PasswordConfirmPage]
})
export class PasswordConfirmPageModule {
}
