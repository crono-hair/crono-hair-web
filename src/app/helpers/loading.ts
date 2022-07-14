import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class Loading {
    form = new BehaviorSubject<boolean>(false);
    list = new BehaviorSubject<boolean>(false);
}
