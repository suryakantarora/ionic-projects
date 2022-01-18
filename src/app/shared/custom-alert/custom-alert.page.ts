import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.page.html',
  styleUrls: ['./custom-alert.page.scss'],
})
export class CustomAlertPage implements OnInit {
  alert: any = {};
  alertType: any = 'ALERT';
  constructor(
    private navParams: NavParams,
    public global: GlobalService
  ) {
    console.log('Head: ' + this.navParams.get('head'));
    console.log('Body: ' + this.navParams.get('body'));
    this.alert.head = this.navParams.get('head');
    this.alert.body = this.navParams.get('body');
    this.alertType = this.navParams.get('type');
  }

  ngOnInit() {
  }

}
