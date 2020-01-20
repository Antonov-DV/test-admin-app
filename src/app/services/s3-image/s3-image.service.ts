import {Injectable} from '@angular/core';
import Amplify, {Storage} from 'aws-amplify';
import {ImageUploadResponse} from './image-upload-response';
import uuid from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class S3ImageService {

    constructor() {
        Storage.configure({
            bucket: 'Testapp-questions-data',
            region: 'us-east-2',
            level: 'public',
            identityPoolId: 'us-east-2_PAxDzTexN',
        });
    }

    public async uploadImages(imageFiles: File[]) {

        const response = [];
        let imageUrl: string;

        imageFiles.forEach(async (file, index) => {

            imageUrl = await this.uploadImage(file);

            response['file-' + index] = {
                'url': imageUrl,
                'id': index
            };
        });

        return response;
    }

    public async uploadImage(imageFile: File) {

        const result = <ImageUploadResponse> await Storage.put(this.getFileUniqueName(imageFile.name), imageFile, {
            level: 'public',
            contentType: imageFile.type,
        });

        const dirtyUrl = await Storage.get(result.key, {level: 'public'});

        return this.cleanImageUrl(dirtyUrl);
    }

    protected getFileUniqueName(fileName) {
        return uuid.v4() + '.' + this.getFileExtension(fileName);
    }

    protected getFileExtension(filename) {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
    }

    protected cleanImageUrl(dirtyUrl) {
        return dirtyUrl.replace(/[\?][\s\S]*$/, '');
    }

    public async getImageUrl(imageKey) {
        return await Storage.get(imageKey);
    }
}
