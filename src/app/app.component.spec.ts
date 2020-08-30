import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppModule } from './app.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ]
        }).compileComponents();
    }));

    beforeEach((() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
