import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {AdminMenuItemComponent} from '../../components/admin-menu-item/admin-menu-item.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: HomePage}]),
    ],
    declarations: [HomePage, AdminMenuItemComponent],
    schemas: [
        AdminMenuItemComponent,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomePageModule {
}
