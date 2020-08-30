import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';

import { FormComponent } from './form.component';

import { ChangingDataFieldService } from '../../services/changing-data-field.service';
import { FormControl, FormGroup } from '@angular/forms';

describe('FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ],
            providers: [ ChangingDataFieldService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    it('should create', () => {
        expect(fixture).toBeTruthy();
        expect(component).toBeTruthy();
    });
    it('form testing', () => {
        expect(component.form).toBeDefined();
    });
    it('subscrition$ testing', () => {
        expect((<any>component).subscrition$).toBeDefined();
    });
    it('onChange() testing', () => {
        let valueStub = ''
        // spyOn((<any>component).form.controls.textareaResult, 'disable')
        //     .and.callThrough();
        // expect((<any>component).form.controls.textareaResult.disable)
        //     .toHaveBeenCalled();
        // component.onChange(valueStub);
        // expect((<any>component).form.controls.textareaResult.setValue).toHaveBeenCalledWith(valueStub);
    });
});
