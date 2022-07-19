import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Loading {
    loading = new BehaviorSubject<boolean>(false);
    form = new BehaviorSubject<boolean>(false);
    list = new BehaviorSubject<boolean>(false);

    constructor() { }
}