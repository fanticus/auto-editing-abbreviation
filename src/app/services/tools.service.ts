import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToolsService {

    constructor() { }

    public letterUpperCase(letter: string): string {
        return letter.toUpperCase();
    }

    public letterLowerCase(letter: string): string {
        return letter.toLowerCase();
    }
}
