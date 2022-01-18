import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-pin-login',
  templateUrl: './pin-login.page.html',
  styleUrls: ['./pin-login.page.scss'],
})
export class PinLoginPage implements OnInit {
  p1:any;
  p2:any;
  p3:any;
  p4:any;
  constructor(
    public global: GlobalService,
    private menu: MenuController
  ) {
    this.menu.enable(false, 'sideMenu');
  }

  ngOnInit() {
  }
  moveOnMax =function (field, id) {
    console.log('field: ' + field + ' id: ' + id);
    if (field.value.length == 1) {
      document.getElementById(id).focus();
    }
  }
  pinClicked(value) {
    console.log('Btn Clicked: ' + value);
    if (this.p1 === undefined || this.p1=== null || this.p1 === '') {
      this.p1 = value;
    } else if (this.p2 === undefined || this.p2=== null || this.p2 === '') {
      this.p2 = value;
    } else if (this.p3 === undefined || this.p3=== null || this.p3 === '') {
      this.p3 = value;
    } else if (this.p4 === undefined || this.p4=== null || this.p4 === '') {
      this.p4 = value;
      setTimeout(() => {
        this.validatePin();
      }, 10);
    }
  }
  clearPin() {
    if (this.p4 !== undefined && this.p4!== null && this.p4 !== '') {
      this.p4 = '';
    } else if (this.p3 !== undefined && this.p3 !== null && this.p3 !== '') {
      this.p3 = '';
    } else if (this.p2 !== undefined && this.p2 !== null && this.p2 !== '') {
      this.p2 = '';
    } else if (this.p1 !== undefined && this.p1 !== null && this.p1 !== '') {
      this.p1 = '';
    }
  }
  goBack() {
    this.global.modalCtrl.dismiss();
  }
  async validatePin() {
    const pin = this.p1 + this.p2 + this.p3 + this.p4;
    console.log('Final PIN: ' + pin);
    if (pin === '1122' || pin === '1234' || pin === '0000') {
      this.global.navCtrl.navigateRoot('tabs').then(() => {
        this.global.modalCtrl.dismiss();
      });
      /* this.global.modalCtrl.dismiss().then(() => {
        this.global.setRoot('tabs');
      }); */
    } else {
      this.global.showFailedAlert('Failed', 'You have entered invalid PIN, Please try again');
      this.clear();
    }
  }
  clear() {
    this.p1 = this.p2 = this.p3 = this.p4 = '';
  }
}
