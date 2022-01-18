import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
  pageStatus: any = 1;
  accType: any ='';
  accName: any = '';
  accNum = '';
  balance = '';
  currency = '';
  totalDebit: any = 0;
  totalCredit: any = 0;
  avlBal: any = 0;
  accList: any = [];
  btnType: any = 'EXPENCE';
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
  };
  pieChartLabels: Label[] = ['Debit', 'Credit', 'Available'];
  pieChartData: number[] = [0, 0, 0];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartColors = [
    {
      backgroundColor: ['rgba(251, 176, 64,0.9)', 'rgba(126, 160, 14,0.8)', 'rgba(102, 45, 145,0.8)'],
    },
  ];
  today:any = new Date().toDateString();
  yesterday: any;
  dayBeforeYesterday: any;
  recents: any = [];
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  fromDate = new Date().toISOString();
  toDate = new Date().toISOString();
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.initAcc();
    this.initGraph();
    this.initDates();
  }
  initDates() {
    const today = new Date();
    const yesterday = new Date(today);
    const dayBeforeYesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

    today.toDateString();
    yesterday.toDateString();
    this.yesterday = yesterday.toDateString();
    this.dayBeforeYesterday = dayBeforeYesterday.toDateString();
    console.log('today: ' + today);
    console.log('yesterday: ' + yesterday);
    console.log('dayBeforeYesterday: ' + dayBeforeYesterday);
    this.initRecent();
  }
  initGraph() {
    this.avlBal = 30000;
    this.totalDebit = 50000;
    this.totalCredit = 55000;
    this.pieChartData = [this.totalDebit, this.totalCredit, this.avlBal];
  }
  initAcc() {
    this.accList = this.global.bank.accountList;
    this.accType = this.accList[0].accType;
    this.accNum = this.accList[0].accNo;
    this.accName = this.accList[0].accName;
    this.balance = this.accList[0].accBal;
    this.currency = this.accList[0].currency;
  }
  async btnClicked(data) {
    console.log(data);
    const loader = await this.global.startLoading();
    loader.present();
    setTimeout(() => {
      this.btnType = data;
      loader.dismiss();
    }, 1000);
  }
  async showAllAccounts() {
    const accLists = [];
    let c = 1;
    this.accList.forEach(acc => {
      accLists.push({
        name: acc.accNo,
        type: 'radio',
        label: this.global.maskedNumber(acc.accNo) + '-' + this.global.getCurrencyText(acc.currency),
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
  initRecent() {
    this.recents = [{
      amount: '1,000.00',
      type: 'DR',
      desc: 'Wallet to wallet transfer',
      name: 'Suryakant Arora',
      date: this.today
    },{
      amount: '12,500.00',
      type: 'CR',
      desc: 'Wallet to account transfer',
      name: 'Durga Nagesh Rao',
      date: this.today
    },{
      amount: '1,100.00',
      type: 'DR',
      desc: 'Bill Payment',
      name: 'McDonald\'s',
      date: this.today
    },{
      amount: '11,000.00',
      type: 'DR',
      name: 'Suryakant Arora',
      date: this.dayBeforeYesterday
    },{
      amount: '5,000.00',
      type: 'CR',
      name: 'Durga Nagesh Rao',
      date: this.dayBeforeYesterday
    },{
      amount: '10,000.00',
      type: 'DR',
      name: 'McDonald\'s',
      date: this.dayBeforeYesterday
    },];
    console.log('Recent: ' + JSON.stringify(this.recents));
  }
  async showDetailStmt() {
    const loader = await this.global.startLoading();
    loader.present();
    setTimeout(() => {
      this.pageStatus = 2;
      loader.dismiss();
    }, 1000);
  }
  shareAcc() {
    const details = '\nAccount No.: ' + this.accNum + ',\n' +
      'IFSC Code: CGSMPAY60008, \nName: ' + this.global.user.fullName + ',\nMobile No.: ' + this.global.user.mobile + ',\n' + 
      'Email ID: ' + this.global.user.email + ',\nAddress: ' + this.global.user.address + '\n\n\n' +
      'Download INSEE Mobile Banking App from play store, click here to download: ' + '\n\nhttps://play.google.com/store/apps/details?id=com.star.mpay.demo';
    this.global.socialShare.share('Please find my account details: ' + details, 'Account Details', null, null);
  }
}
