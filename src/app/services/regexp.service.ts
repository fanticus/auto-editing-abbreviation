import { Injectable } from '@angular/core';
import { ToolsService } from './tools.service';

@Injectable({
    providedIn: 'root'
})
export class RegexpService {

    constructor(
        private toolsService: ToolsService
    ) { }

    public removeSpecialSymbolFromContent( value: string ): string {
        return value.replace(/\(.*?\)|\[.*?\]/g, '');
    }

    public removeSpecialSymbolAndTextFollowing( value: string ): string {
        return value.replace(/[;|].*/g, '');
    }

    public makeCapitalLetters( value: string ): string {
        return value.replace(/\b[a-z](?=[a-z]{1})/gi, this.toolsService.letterUpperCase);
    }

    public removeBrackets( value: string ): string {
        return value.replace(/\[|\]|\(|\)/g, '');
    }

    public removeSeveralSpaces( value: string ): string {
        return value.replace(/ +/g, ' ');
    }

    public removeSpecialSymbol( value: string ): string {
        return value.replace(/[^\w\s\;\[\]\|\(\)]+/g, '');
    }

    public removeBlankLines( value: string ): string {
        return value.replace(/^\n/gm, '');
    }

    public split( value: string, regexp: any ): Array<string> {
        return value.split( regexp );
    }
}
