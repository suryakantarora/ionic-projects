import { Component } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { GlobalService } from './services/global.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public global: GlobalService,
    private menu: MenuController,
    private navCtrl: NavController,
    private oneSignal: OneSignal
  ) {
    setTimeout(() => {
      console.log('Init notification');
      this.initNotification();
    }, 1500);
  }
  openPage(page) {
    this.menu.close();
    this.navCtrl.navigateForward(['/' + page]);
  }
  initNotification() {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.initIosNotification();
      } else {
        this.androidNotification();
      }
    }).catch(() => {
      console.log('Platform not ready for notifiaction');
    });
  }
  initIosNotification() {

  }
  androidNotification() {
    
    try {
      console.log('Initiating Notification');
      this.oneSignal.startInit(this.global.oneSignalAppID, this.global.googleProjectNumber);
      this.oneSignal.enableVibrate(true);
      this.oneSignal.inFocusDisplaying(2);
    } catch (e) {
      console.log('Initiating Notification Exception');
    }
    try {
      this.oneSignal.handleNotificationReceived().subscribe((jsonData) => {
        console.log('Notification Received: ' + this.getDate());
        
      });
    } catch (e) {
      console.log('inFocusDisplaying Notification Exception');
    }
    try {
      this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        
        if (jsonData.notification.payload.additionalData != null) {
          console.log("Here we access addtional data");
          if (jsonData.notification.payload.additionalData.openURL != null) {
            console.log("Here we access the openURL sent in the notification data");
          }
        }
      });
    } catch (e) {
      console.log('inFocusDisplaying Notification Exception');
    }
    try {
      this.oneSignal.endInit();
      console.log('Ending init');
    } catch (e) {
      console.log('Exception in ending notification');
    }
    this.oneSignal.getIds().then(identity => {
      console.log('Player Token: ' + identity.pushToken);
      console.log('Player ID: ' + identity.userId);
    }); 
  }
  getDate() {
    return new Date().toISOString();
  }
  home() {
    this.menu.close();
  }
  logout() {
    this.menu.close();
    this.navCtrl.navigateRoot(['/login']);
  }
}
