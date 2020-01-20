import {LoadingController} from '@ionic/angular';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PreloaderComponent {

    public loader: any;

    constructor(private loadingController: LoadingController) {
    }

    async initLoader() {
        this.loader = await this.loadingController.create({
            spinner: 'lines-small'
        });
    }

    public async displayLoader() {
        await this.initLoader();

        this.loader.present();
    }

    public dismissLoader() {
        if (this.loader) {
            this.loader.dismiss();
        }
    }

}
