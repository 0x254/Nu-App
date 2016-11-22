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
export var Page3 = (function () {
    function Page3(navCtrl) {
        this.navCtrl = navCtrl;
        // public courses = {
        //   coursename1:'Compiler Design',
        //   atd1:'92.5%',
        //   coursename2:'Microprocessor and Microcontroller',
        //   atd2:'95.8%',
        //   coursename3:'Basics of Management',
        //   atd3:'91%',
        //   coursename4:'Theory of Computation',
        //   atd4:'100%',
        //   coursename5:'Computer Networking',
        //   atd5:'87.5%',
        //   coursename6:'Software Engineering',
        //   atd6:'94.5%'
        // }
        this.lists = [
            { id: "Compiler Design",
                bgcolor: '#fb9667',
                nclass: '92.5%' },
            { id: "Microprocessor and Microcontroller",
                bgcolor: 'mediumpurple',
                nclass: '95.8%' },
            { id: "Basics of Management",
                bgcolor: 'orange',
                nclass: '91%' },
            { id: "Theory of Computation",
                bgcolor: 'mediumturquoise',
                nclass: '100%' },
            { id: "Computer Networking",
                bgcolor: ' lightcoral',
                nclass: '87.5%' },
            { id: "Software Engineering",
                bgcolor: 'yellowgreen',
                nclass: '94.5%' }
        ];
    }
    Page3 = __decorate([
        Component({
            selector: 'page-page3',template:/*ion-inline-start:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Nu-App/Sample-app-UI-v3/src/pages/page3/page3.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Attendance</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="responsive">\n<ion-card *ngFor = "let i of lists" (click)="goToOtherPage(i)">\n   <div class="front" [style.backgroundColor] = "i.bgcolor"></div>   \n   <div class="content">{{i.id}}<br><span class="attd">{{i.nclass}}</span></div>\n </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/home/siddharth-shashikar/ionic/ionic-github/NU-app/Nu-App/Sample-app-UI-v3/src/pages/page3/page3.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page3);
    return Page3;
}());
//# sourceMappingURL=page3.js.map