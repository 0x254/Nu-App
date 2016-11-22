import { Component } from '@angular/core';
import {Page1} from '../page1/page1';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page0',
  templateUrl: 'page0.html'
})

export class Page0 {

  constructor(public navCtrl: NavController) {
    
  }
  goToOtherPage(){
    this.navCtrl.setRoot(Page1);
  }
}
