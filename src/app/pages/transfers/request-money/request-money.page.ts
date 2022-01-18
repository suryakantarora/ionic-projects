import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-request-money',
  templateUrl: './request-money.page.html',
  styleUrls: ['./request-money.page.scss'],
})
export class RequestMoneyPage implements OnInit {
  requestType: any = 'new';
  mobileNum: any;
  amount: any;
  remarks: any;
  pendings: any = [];
  recent: any = [];
  today: any = new Date().toISOString();
  yesterday: any = new Date().toISOString();
  dayBeforeYesterday: any = new Date().toISOString();
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  constructor(
    public global: GlobalService
  ) {
    const today = new Date();
    const yesterday = new Date(today);
    const dayBeforeYesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

    today.toDateString();
    yesterday.toDateString();
    this.yesterday = yesterday.toDateString();
    this.dayBeforeYesterday = dayBeforeYesterday.toDateString();
  }

  ngOnInit() {
    this.initiateRecent();
    this.initiatePending();
  }
  async showContacts() {
    await this.global.contcats.pickContact().then((contact) => {
      // alert(JSON.stringify(contact));
      this.global.showAllNumber(contact.displayName, contact.phoneNumbers).then(nmbr => {
        console.log('Selected Contact: ' + nmbr);
        this.mobileNum = nmbr;
      });
    });
    
  }
  
  getWeekDay(date) {
    // return this.weekdays[date.getDay()];
    console.log('Current Date: ' +  new Date(date));
    const date1 = new Date(date);
    console.log('Day of the week: ' +  date1.getDay());
    return this.weekdays[date1.getDay()];
  }
  initiateRecent() {
    this.recent = [{
      date: this.today,
      data: [{
        mobile: '8083705398',
        user: 'Suryakant Kumar',
        amount: this.generateRandomAmt(5),
        currency: this.global.bank.currencySymbol,
        date: this.today,
        type: 'R',
        status: 'S'
      }, {
        mobile: '98327498583',
        user: 'DNR Bandi',
        amount: this.generateRandomAmt(6),
        currency: this.global.bank.currencySymbol,
        date: this.today,
        type: 'S',
        status: 'P'
      }, {
        mobile: '675645664564',
        user: 'Ramesh S',
        amount: this.generateRandomAmt(6),
        currency: this.global.bank.currencySymbol,
        date: this.today,
        type: 'S',
        status: 'S'
      }]
    }, {
      date: this.yesterday,
      data: [{
        mobile: '8083705398',
        user: 'Suryakant Kumar',
        amount: this.generateRandomAmt(5),
        currency: this.global.bank.currencySymbol,
        date: this.yesterday,
        type: 'R',
        status: 'S'
      }, {
        mobile: '98327498583',
        user: 'DNR Bandi',
        amount: this.generateRandomAmt(6),
        currency: this.global.bank.currencySymbol,
        date: this.yesterday,
        type: 'S',
        status: 'P'
      }, {
        mobile: '675645664564',
        user: 'Ramesh S',
        amount: this.generateRandomAmt(6),
        currency: this.global.bank.currencySymbol,
        date: this.yesterday,
        type: 'S',
        status: 'S'
      }]
    },  {
      date: this.dayBeforeYesterday,
      data: [{
        mobile: '8083705398',
        user: 'Suryakant Kumar',
        amount: this.generateRandomAmt(5),
        currency: this.global.bank.currencySymbol,
        date: this.dayBeforeYesterday,
        type: 'R',
        status: 'S'
      }, {
        mobile: '98327498583',
        user: 'DNR Bandi',
        amount: this.generateRandomAmt(6),
        currency: this.global.bank.currencySymbol,
        date: this.dayBeforeYesterday,
        type: 'S',
        status: 'P'
      }, {
        mobile: '675645664564',
        user: 'Ramesh S',
        amount: this.generateRandomAmt(6),
        currency: this.global.bank.currencySymbol,
        date: this.dayBeforeYesterday,
        type: 'S',
        status: 'S'
      }]
    }
  ];
  }
  generateRandomAmt(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }
  initiatePending() {
    this.pendings = [
      {
        user: 'Suryakant Kumar',
        mobile: '8083705398',
        amount: this.generateRandomAmt(5),
        currency: this.global.bank.currencySymbol,
        date: this.today,
      }, {
        user: 'DNR Bandi',
        mobile: '99787683298',
        amount: this.generateRandomAmt(5),
        currency: this.global.bank.currencySymbol,
        date: this.today,
      }, {
        user: 'Subbarao Venkat',
        mobile: '9456577657',
        amount: this.generateRandomAmt(5),
        currency: this.global.bank.currencySymbol,
        date: this.today,
      }, {
        user: 'Bupathi S',
        mobile: '9456577657',
        amount: this.generateRandomAmt(5),
        currency: this.global.bank.currencySymbol,
        date: this.today,
      },  {
        user: 'Selva ',
        mobile: '9456577657',
        amount: this.generateRandomAmt(5),
        currency: this.global.bank.currencySymbol,
        date: this.today,
      }, 
    ];
  }
  async showSuccess() {
    const loading = await this.global.startLoading();
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.global.showSuccessAlert('Success', 'Money requested successfully');
    }, 1000);
  }
  async requestAccept() {
    const loading = await this.global.startLoading();
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.global.showSuccessAlert('Success', 'Requested money accepted and paid to the beneficiary');
    }, 1000);
  }
  async requestReject() {
    const loading = await this.global.startLoading();
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.global.showAlert('Success', 'Requested money got rejected succesfully');
    }, 1000);
  }
}