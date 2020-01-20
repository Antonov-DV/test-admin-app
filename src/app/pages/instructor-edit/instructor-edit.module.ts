import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {InstructorEditPage} from './instructor-edit.page';

const routes: Routes = [
    {
        path: '',
        component: InstructorEditPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
    declarations: [InstructorEditPage]
})

export class InstructorEditPageModule {
}
