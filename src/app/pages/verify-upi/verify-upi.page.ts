import { Component, OnInit } from '@angular/core';
import { Contacts } from '@ionic-native/contacts/ngx';
import { VerifyUpiLoadingPage } from 'src/app/modals/verify-upi-loading/verify-upi-loading.page';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-verify-upi',
  templateUrl: './verify-upi.page.html',
  styleUrls: ['./verify-upi.page.scss'],
})
export class VerifyUpiPage implements OnInit {
  upiId: any;
  showVerify = false;
  constructor(
    public global: GlobalService,
    private contacts: Contacts
  ) { }

  ngOnInit() {
  }
  checkUpi(ev) {
    const str = ev.target.value;
    console.log(str);
    console.log('value.includes @ : ' + str.includes("@"));
    console.log('value.index of @ : ' + str.indexOf("@"));
    console.log('Value Length: ' + str.length);
    if (str.includes("@")) {
      const afterAtValue = str.substring((str.indexOf("@") + 1), str.length);
      console.log(str.indexOf("@"));
      console.log(afterAtValue);
      if (afterAtValue.length >= 3) {
        this.showVerify = true;
      }
    }
  }
  getFirstLetter(upiId) {
    return upiId.substr(0,1);
  }
  async verifyUpi() {
    const modal = await this.global.modalCtrl.create({
      component: VerifyUpiLoadingPage
    });
    modal.present();
    modal.onDidDismiss().then(data => {
      if (data && data.data === 'VALID') {
        this.global.setPage('send-request-money');
      }
    });
  }
  async loadContact() {
    this.contacts.pickContact().then((data) => {
      console.log(JSON.stringify(data.phoneNumbers));
      console.log('Total No.: ' + data.phoneNumbers.length);
      if (data.phoneNumbers.length > 1) {
        this.global.showAllNumber(data.displayName, data.phoneNumbers).then((nmbr) => {
          this.upiId = nmbr;
        });
      } else {
        let mobile = data.phoneNumbers[0].value;
        mobile = mobile.split('-').join('');
        mobile = mobile.split(' ').join('');
        this.upiId = mobile.substr(mobile.length - 10);
      }
    });
  }
}
