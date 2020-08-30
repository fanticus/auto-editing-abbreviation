import { Injectable } from '@angular/core';
import { RegexpService } from './regexp.service';
import { ToolsService } from './tools.service';

@Injectable({
    providedIn: 'root'
})
export class ChangingDataFieldService {

    constructor(
        private regexpService: RegexpService,
        private toolsService: ToolsService
    ) { }

    public changeValue( value: string ): string {
        const newValue: string = this.regexpService.makeCapitalLetters(
            this.removeSymbolAfterProcessing(
                this.workWithAcronyms(
                    this.removeSymbolBeforeProcessing( value )
                )
            )
        );
        return newValue;
    }

    private workWithAcronyms( value: string ): string {
        const arrStrings: Array<string> = value.split( '\n' );
        let newString: string = '';
        arrStrings.forEach( ( itemString: string, index: number ) => {
            newString = this.determineLocationAcronym(
                itemString, newString, arrStrings[index + 1] || ''
            );
        });
        return newString;
    }

    private determineLocationAcronym(
        value: string,
        string: string,
        nextValue: string
    ): string {
        const newValue: string = value.trim().replace(/\s/g, ' ');
        const isOneWord: boolean = !newValue.includes( ' ' );
        const isAcronymBegin: boolean = this.checkAcronymInTheBegin( newValue );
        const isAcronymEnd: boolean = this.checkAcronymInTheEnd( newValue );
        const isDescriptionAcronym: boolean = !isAcronymBegin && !isAcronymEnd;
        const isAcronymOnPreviousLine: boolean = this.checkAcronymOnPreviousLine(
            string, newValue, isDescriptionAcronym
        );
        const isAcronymOnNextLine: boolean = this.checkAcronymOnNextLine(
            nextValue, newValue, isDescriptionAcronym
        );
        if ( /[0-9]/.test( newValue ) ) {
            // console.log('аббревиатура с цифрами')
            return string;
        }
        if ( isOneWord ) {
            // console.log('только акроним');
            if (string) {
                return nextValue
                    ? `${ string }\n${ newValue }`
                    : string;
            } else {
                return newValue;
            }
        }
        if ( isAcronymOnPreviousLine ) {
            // console.log('описание акронима после акронима');
            const indent: string = string
                ? '\t'
                : '';
            return `${ string }${ indent }${
                this.toolsService.letterLowerCase(
                    isAcronymBegin || isAcronymEnd
                        ? this.getCroppedDescription( newValue, isAcronymBegin )
                        : newValue
                )
            }`;
        }
        if ( isAcronymOnNextLine ) {
            // console.log('описание акронима перед акронимом');
            const indent: string = string
                ? '\n'
                : '';
            return `${ string }${ indent }${ nextValue }\t${
                this.toolsService.letterLowerCase( newValue )
            }`;
        }
        if ( isAcronymBegin && isAcronymEnd || isAcronymBegin ) {
            // console.log('акроним в начале строки');
            const indent: string = string
                ? '\n'
                : '';
            const acronym: string = this.regexpService.split( newValue, /\s/ )[ 0 ];
            const remainderString: string = newValue.split( acronym )[ 1 ].trim();
            return `${ string }${ indent }${ acronym }\t${
                this.toolsService.letterLowerCase( remainderString )
            }`;
        }
        if ( isAcronymEnd ) {
            // console.log('акроним в конце строки');
            const indent: string = string
                ? '\n'
                : '';
            return `${ string }${ indent }${ 
                this.moveToBegin( newValue )
            }`;
        }
        if ( isDescriptionAcronym ) {
            // console.log('только описание акронима');
            const indent: string = string
                ? isAcronymOnPreviousLine
                    ? '\n'
                    : ''
                : '';
            return `${ string }${ indent }`;
        }
        // console.log('акронима нет');
        return string;
    }

    private checkAcronymInTheBegin( value: string ): boolean {
        const arrValues: Array<string> = this.regexpService.split( value, /\s/ );
        const firstValue: string = arrValues[ 0 ];
        return value.length > 0
            ? this.checkAcronym(firstValue)
            : false;
    }

    private checkAcronymInTheEnd( value: string ): boolean {
        const arrString: Array<string> = this.regexpService.split( value, /\s/ );
        const findString: string = arrString[ arrString.length - 1 ];
        return value.length > 0
            ? this.checkAcronym(findString)
            : false;
    }

    private checkAcronymOnPreviousLine(
        value: string,
        newValue: string,
        isDescriptionAcronym: boolean
    ): boolean {
        const arrString = value.split( '\n' );
        const lastString = arrString[arrString.length - 1];
        const arrValue = this.regexpService.split( lastString, /\s/ );
        const lastValue = arrValue[arrValue.length - 1];
        const isBelongsAcronymDescription = this.checkBelongsAcronymDescription(
            lastValue, newValue
        );
        return this.checkAcronym(lastValue) &&
            arrValue.length === 1 &&
            isBelongsAcronymDescription
    }

    private checkAcronymOnNextLine(
        value: string,
        newValue: string,
        isDescriptionAcronym: boolean
    ): boolean {
        const arrValue = this.regexpService.split( value, /\s/ );
        const lastValue = arrValue[arrValue.length - 1];
        const isBelongsAcronymDescription = this.checkBelongsAcronymDescription(
            lastValue, newValue
        );
        return this.checkAcronym(lastValue) &&
            arrValue.length === 1 &&
            isBelongsAcronymDescription
    }

    private moveToBegin( value: string ): string {
        const arrString: Array<string> = this.regexpService.split( value, /\s/ );
        const findString: string = arrString[ arrString.length - 1 ];
        const trimString: string = value.split( findString )[ 0 ].trim();
        return `${
                this.regexpService.removeBrackets( findString )
            }\t${
                this.toolsService.letterLowerCase( trimString )
        }`;
    }

    private checkAcronym( value: string ): boolean {
        const newValue = this.regexpService.removeBrackets( value );
        return !!newValue &&
            newValue.length < 6 &&
            newValue.length > 2 &&
            newValue.toUpperCase() === newValue;
    }

    private removeSymbolBeforeProcessing( value: string ): string {
        return this.regexpService.removeSeveralSpaces(
            this.regexpService.removeBlankLines(
                this.regexpService.removeSpecialSymbol( value )
            )
        );
    }

    private removeSymbolAfterProcessing( value: string ): string {
        return this.regexpService.removeBrackets(
            this.regexpService.removeSpecialSymbolAndTextFollowing(
                this.regexpService.removeSpecialSymbolFromContent( value )
            )
        );
    }

    private checkBelongsAcronymDescription( acronym: string, description: string ): boolean {
        return acronym &&
            typeof acronym[0] === 'string' &&
            typeof description[0] === 'string' &&
            acronym[0].toUpperCase() === description[0].toUpperCase();
    }

    private getCroppedDescription(description: string, isAcronymBegin: boolean): string {
        const arrValues = this.regexpService.split( description, /\s/ );
        return isAcronymBegin
            ? description.split(arrValues[0])[1].trim()
            : description.split(arrValues[arrValues.length - 1])[0].trim();
    }
}
