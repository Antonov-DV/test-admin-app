import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CreditPackageEditPage} from './credit-package-edit.page';

const routes: Routes = [
    {
        path: '',
        component: CreditPackageEditPage
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
    declarations: [CreditPackageEditPage]
})
export class CreditPackageEditPageModule {
}
