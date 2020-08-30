import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    public get(name: string): any {
        return JSON.parse(localStorage.getItem(name));
    }

    public set(name: string, data: any): void {
        localStorage.setItem(name, JSON.stringify(data));
    }
}
