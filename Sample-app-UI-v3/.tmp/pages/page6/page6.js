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
import { Page8 } from '../page8/page8';
import { Page7 } from '../page7/page7';
export var Page6 = (function () {
    function Page6(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page6.prototype.goToOtherlocalPage = function () {
        this.navCtrl.push(Page7);
        // for local gatepass
    };
    Page6.prototype.goToOtherOutstationPage = function () {
        this.navCtrl.push(Page8);
        // for outstation gatepass
    };
    Page6 = __decorate([
        Component({
            selector: 'page-page6',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Nu-App/Sample-app-UI-v3/src/pages/page6/page6.html"*/'<ion-header>\n    <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Apply New Gatepass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<button ion-button block outline large (click)="goToOtherlocalPage()" id="localbtn">\n  Local\n</button>\n  <h1 id="ORtext">OR</h1>\n<button ion-button block outline large (click)="goToOtherOutstationPage()" id="outbtn">\n  Outstation\n</button>\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Nu-App/Sample-app-UI-v3/src/pages/page6/page6.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page6);
    return Page6;
}());
//# sourceMappingURL=page6.js.map