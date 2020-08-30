import { TestBed, async } from '@angular/core/testing';

import { ToolsService } from './tools.service';

describe('ToolsService', () => {
    let service: ToolsService;

    beforeEach(async(() => TestBed.configureTestingModule({})));

    beforeEach(() => {
        service = TestBed.get(ToolsService);
    });
    afterEach(() => {
        service = null;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('letterUpperCase() empty value', () => {
        let valueStub = ''
        const result = (<any>service).letterUpperCase(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('letterUpperCase() text in lowercase letters', () => {
        let valueStub = 'test'
        const result = (<any>service).letterUpperCase(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('TEST');
    });
});
