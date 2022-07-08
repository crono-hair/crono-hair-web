import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as $ from 'jquery';

@Injectable({
    providedIn: 'root'
})
export class NavigationBar {
    open = new BehaviorSubject<boolean>(false);

    constructor() { }

    toggleMenuAside(): void {
        this.open.next(!this.open.value);
    }

    openMenuAside() {
        this.open.next(true);

    }
    closeMenuAside() {
        this.open.next(false);
    }

    clickOut() {
        var classe = this;
        $('body').on('click', function (e) {
            classe.closeMenuAside();
        });
        $('.header__aside-toggle').on('click', function (e) {
            e.stopPropagation();
        })
        $('.aside').on('click', function (e) {
            e.stopPropagation();
        })
    }
}