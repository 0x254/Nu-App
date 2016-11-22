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
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
export var Page9 = (function () {
    function Page9(navCtrl, alerCtrl) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.fixed = {
            depdate: '8/11/16',
            arrivaldate: '8/11/16',
            outtime: '05:00 PM',
            intime: '09:00 PM',
        };
    }
    Page9.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Request Send',
            message: 'Bon Voyage!',
            buttons: ['Ok']
        });
        alert.present();
    };
    Page9 = __decorate([
        Component({
            selector: 'page-page9',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page9/page9.html"*/'<ion-header>\n    <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Fixed time</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n  <ion-item>\n    <ion-label>Date of Departure  <span class="values">{{fixed.depdate}}</span></ion-label> \n  </ion-item>\n    \n  <ion-item>\n    <ion-label>Date of Arrival <span class="values">{{fixed.arrivaldate}}</span></ion-label>    \n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Out-Time <span class="values">{{fixed.outtime}}</span></ion-label>        \n  </ion-item>\n  \n  <ion-item>\n    <ion-label>In-Time <span class="values">{{fixed.intime}}</span></ion-label>\n  </ion-item>\n  \n</ion-list>\n<button ion-button block outline large (click)="doAlert()">\n Send\n</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page9/page9.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, AlertController])
    ], Page9);
    return Page9;
}());
//# sourceMappingURL=page9.js.map