import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-wallettransfer',
  templateUrl: './wallettransfer.page.html',
  styleUrls: ['./wallettransfer.page.scss'],
})
export class WallettransferPage implements OnInit {
  walletTitle: any = [];
  remarks: any;
  seletectedAcc: any;
  payFrom: any = "W";
  today = new Date().toISOString();
  pageStatus = 1;
  biller: any;
  mobileNumber: any;
  amount: any;
  constructor(public global: GlobalService, public contacts: Contacts) {
    this.walletTitle = this.global.wallet[0];
    console.log(JSON.stringify(this.walletTitle[0]));
   }

  ngOnInit() {
  }

  async showLoading() {
    const loading: any = await this.global.startLoading();
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }
  async validatemobile(mobile) {
    console.log("mobile" + mobile)
    if (mobile) {
      if (mobile.length < 10) {
        this.global.showAlert('Alert!', 'Invalid Mobile number, Please enter a valid Mobile number');
      } else {
        this.pageStatus = this.pageStatus + 1;
        console.log(' this.pageStatus: ' +  this.pageStatus);
      }
    } else {
      this.global.showAlert('Alert!', 'Bill number cannot be left blank');
    }
  }
  goBack() {
    this.pageStatus -= 1;
  }
  async next() {
    console.log('Page Status: ' + this.pageStatus);
    if (this.pageStatus === 1) {
      this.validatemobile(this.mobileNumber);
    } else if (this.pageStatus === 2) {
      this.pageStatus += 1;
    } else if (this.pageStatus === 3) {
      console.log('Pay From: ' + this.payFrom);
      const loading: any = await this.global.startLoading();
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.pageStatus += 1;
      }, 1000);
    }
  }
  socialSharing() {
    this.global.shareScreenShot();
  }

  async loadContact() {
    this.contacts.pickContact().then((data) => {
      console.log(JSON.stringify(data.phoneNumbers));
      console.log('Total No.: ' + data.phoneNumbers.length);
      if (data.phoneNumbers.length > 1) {
        this.global.showAllNumber(data.displayName, data.phoneNumbers).then((nmbr) => {
          this.mobileNumber = nmbr;
        });
      } else {
        let mobile = data.phoneNumbers[0].value;
        mobile = mobile.split('-').join('');
        mobile = mobile.split(' ').join('');
        this.mobileNumber = mobile.substr(mobile.length - 10);
      }
    });
  }
}
