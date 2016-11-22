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
export var Page4 = (function () {
    function Page4(navCtrl) {
        this.navCtrl = navCtrl;
        this.book = {
            bookname1: 'Operating System Concepts',
            issueddate1: '8/11/16',
            duedate1: '15/11/16',
            bookname2: 'Digital Logic Circuits',
            issueddate2: '8/11/16',
            duedate2: '15/11/16',
            fine: '300Rs'
        };
    }
    Page4 = __decorate([
        Component({
            selector: 'page-page4',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page4/page4.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Library</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-searchbar></ion-searchbar>\n    <ion-card>\n      <ion-card-header class="white-text">{{book.bookname1}}</ion-card-header>\n      <ion-card-content>\n        <ion-label><strong>Issued Date</strong><span class="values">{{book.issueddate1}}</span></ion-label>\n        <ion-label><strong>Due Date</strong><span class="values">{{book.duedate1}}</span></ion-label>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header class="white-text">{{book.bookname2}}</ion-card-header>\n      <ion-card-content>\n        <ion-label><strong>Issued Date</strong><span class="values">{{book.issueddate2}}</span></ion-label>\n        <ion-label><strong>Due Date</strong><span class="values">{{book.duedate2}}</span></ion-label>\n      </ion-card-content>\n    </ion-card>\n  \n  <ion-card>\n      <ion-card-header class="white-text">Fine {{book.fine}}</ion-card-header>\n      <!--<ion-label><span class="values">{{book.fine}}</span></ion-label>                        -->\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page4/page4.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page4);
    return Page4;
}());
//# sourceMappingURL=page4.js.map