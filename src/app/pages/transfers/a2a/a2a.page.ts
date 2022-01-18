import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-a2a',
  templateUrl: './a2a.page.html',
  styleUrls: ['./a2a.page.scss'],
})
export class A2aPage implements OnInit {
  sendTo: any = 'A';
  accType: any ='';
  accName: any = '';
  accNum = '';
  balance = '';
  currency = '';
  totalDebit: any = 0;
  totalCredit: any = 0;
  avlBal: any = 0;
  accList: any = [];
  today:any = new Date().toDateString();
  yesterday: any;
  dayBeforeYesterday: any;
  recents: any = [];
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  fromDate = new Date().toISOString();
  toDate = new Date().toISOString();
  toAccount: any;
  amount: any;
  toCurrency: any;
  remarks: any;
  constructor(
    public global: GlobalService) { }

  ngOnInit() {
    this.initAcc();
  }
  
  async showContacts() {
    await this.global.contcats.pickContact().then((contact) => {
      // alert(JSON.stringify(contact));
      this.global.showAllNumber(contact.displayName, contact.phoneNumbers).then(nmbr => {
        console.log('Selected Contact: ' + nmbr);
        this.toAccount = nmbr;
      });
    });
    
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
  validateFields() {
    console.log('Validating Fields');
    this.global.navCtrl.navigateForward(['/transfer-result']).then();
  }
}
