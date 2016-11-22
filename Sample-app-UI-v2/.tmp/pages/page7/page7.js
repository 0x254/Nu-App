var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page9 } from '../page9/page9';
import { Page10 } from '../page10/page10';
export var Page7 = (function () {
    function Page7(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page7.prototype.goToFixedPage = function () {
        this.navCtrl.push(Page9);
        // for fixed time gatepass
    };
    Page7.prototype.goToVariablePage = function () {
        this.navCtrl.push(Page10);
        // for variable time gatepass
    };
    Page7 = __decorate([
        Component({
            selector: 'page-page7',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page7/page7.html"*/'<ion-header>\n    <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Local Gatepass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<button ion-button block outline large id="localbtn" (click)="goToFixedPage()">\n Fixed time\n</button>\n  <h1 class="ORtext">OR</h1>\n<button ion-button block outline large id="outbtn" (click)="goToVariablePage()">\n  Variable time\n</button>\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page7/page7.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page7);
    return Page7;
}());
//# sourceMappingURL=page7.js.map