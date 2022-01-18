import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.page.html',
  styleUrls: ['./topup.page.scss'],
})
export class TopupPage implements OnInit {
  pageStatus = 1;
  operator: any;
  circle: any;
  amount: any = 100;
  telecom: any;
  payFrom: any = 'W';
  slideOpts = {
    initialSlide: 0,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 2000
    }
  };
  mobileNum: string;
  description: any = 'Free 100 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 1-Months';
  accNum: any;
  accType: any;
  accName: any;
  currency: any;
  balance: any;
  accList: any = [];
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.initAcc();
  }
  checkPlan(p) {
    this.amount=p.amount;
    this.description = p.description;
  }
  slideChanged(slides: IonSlides) {
    slides.startAutoplay();
  }
  
  async showContacts() {
    await this.global.contcats.pickContact().then((contact) => {
      this.global.showAllNumber(contact.displayName, contact.phoneNumbers).then(nmbr => {
        console.log('Selected Contact: ' + nmbr);
        this.mobileNum = nmbr;
      });
    });
  }
  validateMobile() {
    this.pageStatus = 2;
  }
  initAcc() {
    this.accList = this.global.bank.accountList;
    this.accType = this.accList[0].accType;
    this.accNum = this.accList[0].accNo;
    this.accName = this.accList[0].accName;
    this.balance = this.accList[0].accBal;
    this.currency = this.accList[0].currency;
  }
  async showAllAccounts() {
    const accLists = [];
    let c = 1;
    this.accList.forEach(acc => {
      accLists.push({
        name: acc.accNo,
        type: 'radio',
        label: this.global.maskedNumber(acc.accNo) /* + '-' + this.global.getCurrencyText(acc.currency) */,
        value: acc,
        checked: (c===1?true:false)
      });
      c++;
    });
    const alert = await this.global.alertCtrl.create({
      header: 'Select Account',
      mode: 'ios',
      inputs: accLists,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'tertiary',
          handler: (data) => {
            console.log('Confirm Cancel: '+ data);
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok: ' + JSON.stringify(data));
            this.selectedAcc(data);
          }
        }
      ]
    });

    await alert.present();
  }
  selectedAcc(acc) {
    this.accType = acc.accType;
    this.accNum = acc.accNo;
    this.accName = acc.accName;
    this.balance = acc.accBal;
    this.currency = acc.currency;
  }
  async showSuccess() {
    const loading = await this.global.startLoading();
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.global.showSuccessAlert('Success', 'Mobile topup successful').then(() => {
        this.global.pop();
      });
    }, 1000);
  }
}
