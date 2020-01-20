import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {QuestionEditPage} from './question-edit.page';
import {ImperaviEditorComponent} from '../../components/imperavi-editor/imperavi-editor.component';
import {CustomSelectComponent} from '../../components/custom-select/custom-select.component';

const routes: Routes = [
    {
        path: '',
        component: QuestionEditPage
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
    declarations: [QuestionEditPage, ImperaviEditorComponent, CustomSelectComponent],
    schemas: [
        ImperaviEditorComponent,
        CustomSelectComponent,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class QuestionEditPageModule {
}
