import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'top',
  platforms: {
      android:{
        tabsPlacement: 'top'
      },
      ios:{
        tabsPlacement: 'top'
      },
      windows:{
        tabsPlacement: 'top'
      }
    }  
    // not been able to add the tabs items in the left
    // it seems that it can be only be placed on the top / bottom of the screen .
  })
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
