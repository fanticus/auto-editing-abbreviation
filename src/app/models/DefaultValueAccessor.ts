import { Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

export class DefaultValueAccessor implements ControlValueAccessor {

    @Input()
    public control: FormControl;
    @Input()
    public writeValue(value: any): void {
        this.value = value;
    }

    public value: string;
    public disabled: boolean;

    public onChange: any = () => {};
    public onTouched: any = () => {};

    constructor() { }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public updateValue(value: any = ''): void {
        this.value = value;
        this.onChange(value);
        this.onTouched();
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
