import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import 'app/components/imperavi-editor/core/redactor.js';
import './core/_plugins/video/video.js';
import './core/_plugins/table/table.js';
import './core/_plugins/limiter/limiter.js';
import './core/_plugins/fontcolor/fontcolor.js';
import './core/_plugins/alignment/alignment.js';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';
import RedactorApp from './core/redactor.js';
import {S3ImageService} from '../../services/s3-image/s3-image.service';


declare var $R: any;

@Component({
    selector: 'imperavi-editor',
    templateUrl: './imperavi-editor.component.html'
})
export class ImperaviEditorComponent implements OnInit, ControlValueAccessor {

    @ViewChild('contentTextarea') textareaElement: ElementRef;

    @Input() formCtlName: string;
    @Input() formGroup: FormGroup;

    public textValue: string;

    private onChange: Function;

    private redactor: RedactorApp;

    constructor(private s3ImageService: S3ImageService) {
    }

    ngOnInit() {
        this.redactor = $R(this.textareaElement.nativeElement, this.getEditorConfig());

        this.formGroup.controls[this.formCtlName].valueChanges.subscribe(val => {
            this.textValue = val;

            const sourceCode = this.redactor.source.getCode();
            let codeUpdated = sourceCode !== this.textValue;
            const editorHtml = this.redactor.editor.$editor.html();

            if ((editorHtml == null) || (editorHtml === '<p></p>')) {
                codeUpdated = true;
            }

            if ((val !== null) && (codeUpdated)) {
                this.redactor.source.setCode(this.textValue);
            }
        });
    }

    protected getEditorConfig() {
        return {
            autoparse: false,
            removeScript: false,
            removeNewLines: false,
            cleanOnEnter: false,
            removeComments: false,
            replaceTags: false,
            imageFigure: false,
            grammarly: false,
            paragraphize: false,
            replaceDivs: false,
            imagePosition: true,
            imageResizable: true,
            multipleUpload: false,
            imageFugure: false,
            source: true,
            buttons: [
                'html',
                'undo',
                'redo',
                'alignment',
                'fontcolor',
                'format',
                'bold',
                'italic',
                'underline',
                'deleted',
                'sup',
                'sub',
                'image',
                'link',
                'line'
            ],
            plugins: [
                'video',
                'table',
                'limiter',
                'fontcolor',
                'alignment',
            ],
            imageUpload: (data, files, e, upload) => {

                return this.s3ImageService.uploadImage(files[0])
                    .then((response) => {
                        upload.complete(response);
                    }).catch((response) => {
                        upload.complete(response);
                    });
            },
            callbacks: {
                changed: html => {
                    this.formGroup.controls[this.formCtlName].setValue(html);
                }
            }
        };
    }

    writeValue(value: any) {
        this.onChange(value);
        this.textValue = value;
    }

    registerOnChange(fn: Function) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
    }
}
