import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.page.html',
  styleUrls: ['./bill-payment.page.scss'],
})
export class BillPaymentPage implements OnInit {
  biller: any; //  = {title: 'Electricity', icon: 'assets/imgs/bill/electricity-bill-512x512.png'};
  pageStatus = 1;
  seletectedAcc: any;
  payFrom: any = "W";
  today = new Date().toISOString();
  constructor(
    public global: GlobalService
  ) { 
    this.biller = this.global.biller;
    //console.log('Biller Detail: ' + JSON.stringify(this.biller));
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
  async validateBill(bill) {
    if (bill) {
      if (bill.length < 5) {
        this.global.showAlert('Alert!', 'Invalid Bill number, Please enter a valid bill number');
      } else {
        this.biller.outstanding = 1563232;
        this.biller.dueMonth = this.global.getMonthName(new Date().getMonth() - 1) + ', ' + new Date().getFullYear();
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
      this.validateBill(this.biller.id);
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
}
