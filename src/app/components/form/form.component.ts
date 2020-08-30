import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ChangingDataFieldService } from '../../services/changing-data-field.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit, OnDestroy {

    public form: FormGroup;

    private subscrition$: Subscription = new Subscription();

    constructor(
        private changingDataFieldService: ChangingDataFieldService,
        private localStorageService: LocalStorageService
    ) { }

    ngOnInit() {
        this.createForm();
        this.subscrition$.add(
            this.form.get('textareaEditing').valueChanges
                .subscribe( res => {
                    this.onChange( String(res) );
                })
        );
        this.subscrition$.add(
            this.form.get('textareaResult').valueChanges
                .subscribe( res => {
                    this.localStorageService.set('valueTextareaResult', res);
                })
        );
    }

    ngOnDestroy() {
        this.subscrition$.unsubscribe();
    }

    public onChange( value: string ): void {
        const newValue: string = value.trim();
        this.form.controls.textareaResult.disable();
        let resultValue: string = newValue
            ? this.changingDataFieldService.changeValue( newValue )
            : '';
        this.form.controls.textareaResult.enable();
        this.form.controls.textareaResult.patchValue(resultValue);
        this.saveValueForm(value, resultValue);
    }

    private createForm(): void {
        const valueTextareaEditing = this.localStorageService.get('valueTextareaEditing') || '';
        const valueTextareaResult = this.localStorageService.get('valueTextareaResult') || '';
        this.form = new FormGroup({
            textareaEditing: new FormControl( valueTextareaEditing ),
            textareaResult: new FormControl( valueTextareaResult )
        });
    }

    private saveValueForm( value: string, resultValue: string ): void {
        this.localStorageService.set('valueTextareaEditing', value);
        this.localStorageService.set('valueTextareaResult', resultValue);
    }
}
