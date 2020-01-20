import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormGroup} from '@angular/forms';
import {CustomSelectOption} from './custom-select-option.class';
import {Select} from '@ionic/angular';

@Component({
    selector: 'custom-select',
    templateUrl: './custom-select.component.html',
})
export class CustomSelectComponent implements OnInit, OnChanges, ControlValueAccessor {

    @ViewChild('selectInput') selectInput: Select;

    @Input() optionsList: Array<CustomSelectOption>;
    @Input() placeholder: string;
    @Input() formCtlName: string;
    @Input() formGroup: FormGroup;

    private onChange: Function;
    private onTouched: Function;

    public currentValue: string;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.setLabelSelected();
    }

    writeValue(value: any) {
        this.currentValue = value;
        this.onChange(value);
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    private setLabelSelected() {
        this.currentValue = this.selectInput.value;

        if ((this.optionsList !== undefined) && (this.currentValue !== undefined)) {
            const selectedOptions = this.optionsList.filter((value, index, array) => {
                if (value.value === this.currentValue) {
                    return value;
                }
            });

            this.selectInput.selectedText = selectedOptions[0].label;
        }
    }
}
