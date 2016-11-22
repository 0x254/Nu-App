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
export var Page5 = (function () {
    function Page5(navCtrl) {
        this.navCtrl = navCtrl;
        this.lists = [
            {
                id: "8:30-9:30",
                id2: "CS231",
                id3: "LT211"
            }];
        this.days = [
            "Monday"
        ];
    }
    Page5 = __decorate([
        Component({
            selector: 'page-page5',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page5/page5.html"*/'<ion-header>\n    <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{days}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card *ngFor = "let list of lists" class="width">\n  <ion-card-header class="header">\n    <span class="time">{{list.id}}</span><br/>\n    <span class="lec">{{list.id2}}</span><br/>\n    <span class="venue">{{list.id3}}</span>\n  </ion-card-header>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Sample-app-UI-v2/src/pages/page5/page5.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page5);
    return Page5;
}());
//# sourceMappingURL=page5.js.map