import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DefaultValueAccessor } from '../../../models/DefaultValueAccessor';

@Component({
    selector: 'app-field-textarea',
    templateUrl: './field-textarea.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: FieldTextareaComponent,
            multi: true
        }
    ]
})
export class FieldTextareaComponent extends DefaultValueAccessor {

    @Input()
    public placeholder: string;

    constructor() {
        super();
    }
}
