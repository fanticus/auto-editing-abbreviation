import { TestBed, async } from '@angular/core/testing';

import { RegexpService } from './regexp.service';
import { ToolsService } from './tools.service';

describe('RegexpService', () => {
    let service: RegexpService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [ ToolsService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        service = TestBed.get(RegexpService);
    });
    afterEach(() => {
        service = null;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('removeBracketsFromContent() empty value', () => {
        let valueStub = ''
        const result = (<any>service).removeBracketsFromContent(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('removeBracketsFromContent() brackets without text inside', () => {
        let valueStub = '()'
        const result = (<any>service).removeBracketsFromContent(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('removeBracketsFromContent() the text in brackets', () => {
        let valueStub = '(test)'
        const result = (<any>service).removeBracketsFromContent(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });

    it('makeCapitalLetters() empty value', () => {
        let valueStub = ''
        const result = (<any>service).makeCapitalLetters(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('makeCapitalLetters() one word', () => {
        let valueStub = 'test'
        const result = (<any>service).makeCapitalLetters(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('Test');
    });
    it('makeCapitalLetters() some words', () => {
        let valueStub = 'test test'
        const result = (<any>service).makeCapitalLetters(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('Test Test');
    });

    it('removeBrackets() empty value', () => {
        let valueStub = ''
        const result = (<any>service).removeBrackets(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('removeBrackets() brackets without text inside', () => {
        let valueStub = '()'
        const result = (<any>service).removeBrackets(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('removeBrackets() the text in brackets', () => {
        let valueStub = '(test)'
        const result = (<any>service).removeBrackets(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('test');
    });

    it('removeSeveralSpaces() empty value', () => {
        let valueStub = ''
        const result = (<any>service).removeSeveralSpaces(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('removeSeveralSpaces() mone space', () => {
        let valueStub = ' '
        const result = (<any>service).removeSeveralSpaces(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual(' ');
    });
    it('removeSeveralSpaces() one space between the text', () => {
        let valueStub = 'test test'
        const result = (<any>service).removeSeveralSpaces(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('test test');
    });
    it('removeSeveralSpaces() multiple spaces', () => {
        let valueStub = '  '
        const result = (<any>service).removeSeveralSpaces(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual(' ');
    });
    it('removeSeveralSpaces() multiple spaces between the text', () => {
        let valueStub = 'test  test'
        const result = (<any>service).removeSeveralSpaces(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('test test');
    });

    it('removeBlankLines() empty value', () => {
        let valueStub = ''
        const result = (<any>service).removeBlankLines(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('removeBlankLines() multiple empty lines', () => {
        let valueStub = '\n\n'
        const result = (<any>service).removeBlankLines(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('');
    });
    it('removeBlankLines() several empty lines between the text', () => {
        let valueStub = 'test\n\ntest'
        const result = (<any>service).removeBlankLines(valueStub);
        expect(typeof result).toEqual('string');
        expect(result).toEqual('test\ntest');
    });
});
