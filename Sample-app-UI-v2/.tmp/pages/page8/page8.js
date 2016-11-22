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
export var Page8 = (function () {
    function Page8(navCtrl, alerCtrl) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.event = {
            depdate: '19-02-1990',
            outtime: '05:00',
            arrivedate: '19-02-1990',
            intime: '07:00',
        };
        this.visitto = {};
        this.warden = {};
    }
    Page8.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Request Send',
            message: 'Bon Voyage!',
            buttons: ['Ok']
        });
        alert.present();
    };
    Page8 = __decorate([
        Component({
            selector: 'page-page8',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page8/page8.html"*/'<ion-header>\n    <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Outstation Gatepass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n  \n  <ion-item>\n    <ion-label floating>Purpose of Visit</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Destination Address</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Destination Contact Details</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n  <br/>\n\n  <ion-item>\n      <ion-label>Date of Departure</ion-label>\n      <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="event.depdate"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Date of Arrival</ion-label>\n      <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="event.arrivedate"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Out-Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.outtime"></ion-datetime>\n  </ion-item>\n\n <ion-item>\n      <ion-label>In-Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.intime"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Visit to</ion-label>\n    <ion-select [(ngModel)]="visitto">\n      <ion-option value="or">Own residence</ion-option>\n      <ion-option value="rr">Relative residence</ion-option>\n      <ion-option value="fr">Family residence</ion-option>\n      <ion-option value="o">Others</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Send Approval to ?</ion-label>\n    <ion-select [(ngModel)]="warden">\n      <ion-option value="as">Abhinav.Sharma</ion-option>\n      <ion-option value="dr">Dhirendra.Rathore</ion-option>\n      <ion-option value="kr">Kamala.Rawat</ion-option>\n      <ion-option value="sm">Supratim.Mitra</ion-option>\n      <ion-option value="gm">G.Maradana</ion-option>\n      <ion-option value="lk">Lokesh.Kumar</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n\n<button ion-button block outline large (click)="doAlert()">\n Send\n</button>\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page8/page8.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, AlertController])
    ], Page8);
    return Page8;
}());
//# sourceMappingURL=page8.js.map