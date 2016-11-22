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
import { Page6 } from '../page6/page6';
export var Page2 = (function () {
    function Page2(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page2.prototype.goToOtherPage = function () {
        this.navCtrl.push(Page6);
    };
    Page2 = __decorate([
        Component({
            selector: 'page-page2',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page2/page2.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gate Pass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   <!--<ion-slides pager >\n  <ion-slide style="background-color: #01A9DB">\n    <ion-card>\n      <ion-card-header>Pending</ion-card-header>\n      <ion-card-content>\n        <p><em>status of the pending gatepasses</em></p>\n      </ion-card-content>\n    </ion-card>\n\n     <ion-card>\n      <ion-card-header>Approved</ion-card-header>\n      <ion-card-content>\n        <p><em>status of the approved gatepasses</em></p>\n      </ion-card-content> \n    </ion-card>\n\n     <ion-card>\n      <ion-card-header>Rejected</ion-card-header>\n      <ion-card-content>\n        <p><em>status of the rejected gatepasses</em></p>       \n      </ion-card-content>\n    </ion-card>    \n  </ion-slide>\n  \n  <ion-slide style="background-color: #01A9DB">\n    <p class="white-text">Step 1</p>\n    <h2 class="white-text">Apply new Gatepass</h2>\n     <button ion-button color="light" outline>Local Gatepass</button>\n     <button ion-button color="light" outline>Outstation Gatepass</button>\n  </ion-slide>\n  \n  <ion-slide style="background-color: #01A9DB">\n   <p class="white-text">Step 2</p>\n    <h2 class="white-text">Choose In-time/Out-time</h2>\n    </ion-slide>\n\n\n  <ion-slide style="background-color: #01A9DB">\n    <h2 class="white-text">Send request to ?</h2>\n    <ion-list radio-group>\n      <ion-item>\n        <ion-label>Kumar Vishal</ion-label>\n        <ion-radio value="kv"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Dhirendra Rathore</ion-label>\n        <ion-radio value="dr"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Lokesh Kumar</ion-label>\n        <ion-radio value="lk"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Supratim Mitra</ion-label>\n        <ion-radio value="sm"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Kamla Rawat</ion-label>\n        <ion-radio value="kr"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Abhinav sharma</ion-label>\n        <ion-radio value="as"></ion-radio>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>G.Mardana</ion-label>\n        <ion-radio value="gm"></ion-radio>\n      </ion-item> \n    </ion-list>\n    <button ion-button color="light" outline>Send</button>\n  </ion-slide>\n</ion-slides>-->\n<ion-card>\n  <ion-card-header class="header">\n    Recent Activity\n  </ion-card-header>\n  <ion-card-content>\n    <ion-label>Gatepass Type<span class="info">Outstation</span></ion-label>\n    <ion-label>Out-time<span class="info">5:30 PM , 9/11/16</span></ion-label>\n    <ion-label>In-time<span class="info">9:45 PM , 15/11/16</span></ion-label> \n    <ion-label>Status<span class="info">Pending</span></ion-label>\n  </ion-card-content>\n</ion-card>\n<!--<div class="hor-bar"></div>-->\n<button ion-button block outline large id="applybtn" (click)="goToOtherPage()">\n  Apply New\n</button>\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page2/page2.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page2);
    return Page2;
}());
//# sourceMappingURL=page2.js.map