import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/internal/operators';
import {PreloaderComponent} from '../../components/preloader/preloader.component';
import {Subject} from 'rxjs/index';
import {MyPalMessageDataProviderService} from '../../services/mypal-message/mypal-message-data-provider.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit, OnDestroy {


    public messagesList: Object;
    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router,
                private messageDataProvider: MyPalMessageDataProviderService,
                private preloader: PreloaderComponent) {
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.messageDataProvider.messages$.pipe(takeUntil(this.destroy$)).subscribe(messages => {
            this.messagesList = messages;

            this.preloader.dismissLoader();
        });
    }

    async ionViewWillEnter() {
        this.messageDataProvider.listAllMessages();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }

    editMessage(messageId) {
        this.router.navigate(['message-edit', messageId]);
    }
}
