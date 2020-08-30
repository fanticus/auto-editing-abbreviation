import { TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';

import { DefaultValueAccessor } from './DefaultValueAccessor';
import { FormControl } from '@angular/forms';

describe('DefaultValueAccessor', () => {
    let field: DefaultValueAccessor;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        field = new DefaultValueAccessor();
        field.control = new FormControl();

    });
    afterAll(() => {
        field = null;
    });

    it('should be created', () => {
        expect(field.control).toBeTruthy();
    });
    it('value testing', () => {
        expect(field.value).toBeUndefined();
    });
    it('disabled testing', () => {
        expect(field.disabled).toBeUndefined();
    });
    it('onChange testing', () => {
        expect(typeof field.onChange).toEqual('function');
    });
    it('onTouched testing', () => {
        expect(typeof field.onTouched).toEqual('function');
    });
});