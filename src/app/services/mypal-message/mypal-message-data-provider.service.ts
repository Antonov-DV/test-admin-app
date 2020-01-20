import {Injectable} from '@angular/core';
import {TestDataProviderService} from '../test-data-service/test-data-provider.service';
import {getTestMyPalMessage, listTestMyPalMessages} from '../../../graphql/queries';
import {MessageInterface} from './message.interface';
import {updateTestMyPalMessage} from '../../../graphql/mutations';
import {LevelItemInterface} from '../../interfaces/level-item.interface';
import {ReplaySubject} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class MyPalMessageDataProviderService extends TestDataProviderService {

    protected messagesSubject$;
    public messages;
    public messages$;

    init() {
        this.messagesSubject$ = new ReplaySubject<MessageInterface[]>(1);
        this.messages$ = this.messagesSubject$.asObservable();
    }

    public async listAllMessages() {
        const queryResult = await this.runQuery(listTestMyPalMessages);

        this.messages = queryResult.data.listTestMyPalMessages.items;
        this.messagesSubject$.next(this.messages);

        return queryResult.data.listTestMyPalMessages.items;
    }

    public async getMessage(messageId) {
        const queryResult = await this.runQuery(getTestMyPalMessage, {
            messageId: messageId
        });

        return queryResult.data.getTestMyPalMessage;
    }

    public async updateMessage(message: MessageInterface) {
        const queryResult = await this.runQuery(updateTestMyPalMessage, {
            input: message,
        });

        return queryResult.data.updateTestMyPalMessage;
    }
}
