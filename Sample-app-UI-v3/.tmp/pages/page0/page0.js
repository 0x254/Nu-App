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
import { Page1 } from '../page1/page1';
import { NavController } from 'ionic-angular';
export var Page0 = (function () {
    function Page0(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page0.prototype.goToOtherPage = function () {
        this.navCtrl.setRoot(Page1);
    };
    Page0 = __decorate([
        Component({
            selector: 'page-page0',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Nu-App/Sample-app-UI-v3/src/pages/page0/page0.html"*/'<ion-header>\n    <ion-navbar color="primary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Welcome To NU-App</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="view">\n\n<img src="../image/NUlogo.png" alt="NUlogo"  class="responsive" id="nulogo">\n\n\n <!--<ion-item class="pos transparent">\n    <ion-label color="primary" floating>Email-id</ion-label>\n    <ion-input type="text"></ion-input>\n </ion-item>\n\n <ion-item class="pos1 transparent">\n    <ion-label color="primary" floating>Password</ion-label>\n    <ion-input type="password"></ion-input>\n </ion-item>-->\n\n <button ion-button block (click)="goToOtherPage()" id="btn">Sign In</button>\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Nu-App/Sample-app-UI-v3/src/pages/page0/page0.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page0);
    return Page0;
}());
//# sourceMappingURL=page0.js.map