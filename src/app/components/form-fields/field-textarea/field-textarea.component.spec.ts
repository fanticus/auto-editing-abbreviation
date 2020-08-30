import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { AppModule } from '../../../app.module';

import { FieldTextareaComponent } from './field-textarea.component';

describe('FieldTextareaComponent', () => {
    let component: FieldTextareaComponent;
    let fixture: ComponentFixture<FieldTextareaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldTextareaComponent);
        component = fixture.componentInstance;
        component.control = new FormControl();
        component.placeholder = '';
        fixture.detectChanges();
    });
    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
