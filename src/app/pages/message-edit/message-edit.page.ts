import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PreloaderComponent} from '../../components/preloader/preloader.component';
import {MyPalMessageDataProviderService} from '../../services/MyPal-message/MyPal-message-data-provider.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'message-edit',
    templateUrl: './message-edit.page.html',
    styleUrls: ['./message-edit.page.scss'],
})
export class MessageEditPage implements OnInit, OnDestroy {
    private sub: any;
    protected messageEditForm: FormGroup;
    private messageId;

    protected actionInProcess = false;
    public messageCaseTitle: string;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private messageDataService: MyPalMessageDataProviderService,
                private formBuilder: FormBuilder,
                private preloader: PreloaderComponent) {

        this.messageEditForm = this.formBuilder.group({
            text: ['', Validators.required],
        });
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.sub = this.route.params.subscribe(params => {
            this.messageId = params['messageId'];
        });

        this.sub = this.route.params.subscribe(async function (params) {
            this.messageId = params['messageId'];

            if (this.messageId !== undefined) {

                this.pageTitle = 'Edit message';

                const message: any = await this.messageDataService.getMessage(params['messageId']);

                if (message) {
                    this.messageId = message.messageId;
                    this.messageEditForm.setValue({text: message.text});
                    this.messageCaseTitle = message.caseTitle;
                }

            }

            await this.preloader.dismissLoader();

        }.bind(this));

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    performCancel() {
        this.location.back();
    }

    performSave() {
        this.actionInProcess = true;

        const message: any = {
            messageId: this.messageId,
            text: this.messageEditForm.value.text
        };

        this.messageDataService.updateMessage(message).then(message => {
            this.actionInProcess = false;
        });

        this.location.back();
    }


}
