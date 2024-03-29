import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports:
        [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AmplifyAngularModule],
    providers:
        [
            StatusBar,
            SplashScreen,
            AmplifyService,
            FormsModule,
            ReactiveFormsModule,
            {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
        ],
    bootstrap:
        [AppComponent],
})

export class AppModule {
}
