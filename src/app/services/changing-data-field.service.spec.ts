import { TestBed, async } from '@angular/core/testing';

import { ChangingDataFieldService } from './changing-data-field.service';
import { RegexpService } from './regexp.service';

describe('ChangingDataFieldService', () => {
    let service: ChangingDataFieldService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [ RegexpService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        service = TestBed.get(ChangingDataFieldService);
    });
    afterEach(() => {
        service = null;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
