import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {
    FieldTextareaComponent
} from './components/form-fields/field-textarea/field-textarea.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        FieldTextareaComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
