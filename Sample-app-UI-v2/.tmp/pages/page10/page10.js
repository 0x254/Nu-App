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
export var Page10 = (function () {
    function Page10(navCtrl, alerCtrl) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.event = {
            outtime: '05:00',
            intime: '07:00',
        };
        this.warden = {};
    }
    Page10.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Request Send',
            message: 'Bon Voyage!',
            buttons: ['Ok']
        });
        alert.present();
    };
    Page10 = __decorate([
        Component({
            selector: 'page-page10',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page10/page10.html"*/'<ion-header>\n    <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Varaible time</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n  \n  <ion-item>\n    <ion-label floating>Purpose of Visit</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Out-Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.outtime"></ion-datetime>\n  </ion-item>\n\n <ion-item>\n      <ion-label>In-Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.intime"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Send Approval to ?</ion-label>\n    <ion-select [(ngModel)]="warden">\n      <ion-option value="as">Abhinav.Sharma</ion-option>\n      <ion-option value="dr">Dhirendra.Rathore</ion-option>\n      <ion-option value="kr">Kamala.Rawat</ion-option>\n      <ion-option value="sm">Supratim.Mitra</ion-option>\n      <ion-option value="gm">G.Maradana</ion-option>\n      <ion-option value="lk">Lokesh.Kumar</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n\n<button ion-button block outline large (click)="doAlert()">\n Send\n</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page10/page10.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, AlertController])
    ], Page10);
    return Page10;
}());
//# sourceMappingURL=page10.js.map