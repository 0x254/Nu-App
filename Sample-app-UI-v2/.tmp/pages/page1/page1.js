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
import { Page5 } from '../page5/page5';
import { NavController } from 'ionic-angular';
export var Page1 = (function () {
    function Page1(navCtrl) {
        this.navCtrl = navCtrl;
        this.lists = [
            { id: "Monday",
                bgcolor: '#fb9667',
                nclass: '4 lectures' },
            { id: "Tuesday",
                bgcolor: 'mediumpurple',
                nclass: '7 lectures' },
            { id: "Wednesday",
                bgcolor: 'orange',
                nclass: '6 lectures' },
            { id: "Thrusday",
                bgcolor: 'mediumturquoise',
                nclass: '8 lectures' },
            { id: "Friday",
                bgcolor: ' lightcoral',
                nclass: '8 lectures' },
            { id: "Saturday",
                bgcolor: 'yellowgreen',
                nclass: '8 lectures' }
        ];
    }
    Page1.prototype.goToOtherPage = function () {
        this.navCtrl.push(Page5);
    };
    Page1 = __decorate([
        Component({
            selector: 'page-page1',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page1/page1.html"*/'<ion-header>\n    <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TimeTable</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-card *ngFor = "let i of lists" (click)="goToOtherPage(i)">\n   <div class="front" [style.backgroundColor] = "i.bgcolor"></div>   \n   <div class="content">{{i.id}} <ion-badge item-right>{{i.nclass}}</ion-badge></div>\n </ion-card>\n </ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page1/page1.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page1);
    return Page1;
}());
//# sourceMappingURL=page1.js.map