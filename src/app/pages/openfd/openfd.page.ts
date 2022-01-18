import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-openfd',
  templateUrl: './openfd.page.html',
  styleUrls: ['./openfd.page.scss'],
})
export class OpenfdPage implements OnInit {
  fd: any = {
    rate: '5',
    tenure: '18 Months',
    creditFrequency: 'M',
    autoRenew: true,
    amount: 60000, 
    debitAccount: this.global.bank.accountList[0].accNo
  };
  accList: any = [];
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.accList = this.global.bank.accountList;
  }
  setCrdeitFrequency(data) {
    this.fd.creditFrequency = data;
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
    this.fd.debitAccount = acc.accNo;
  }
  async showSuccess() {
    const loading = await this.global.startLoading();
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.global.showSuccessAlert('Success', 'Congratulations!, your FD account has been created successfully. Shortly you will receive the confirmation notification on your registered Email ID and mobile number.');
    }, 1000);
  }
}
