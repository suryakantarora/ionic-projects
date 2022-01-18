import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-transfer-result',
  templateUrl: './transfer-result.page.html',
  styleUrls: ['./transfer-result.page.scss'],
})
export class TransferResultPage implements OnInit {
  txnDate: any = new Date().toISOString();
  result: any = {
    status: 'S',
    txnType: 'A2A',
    fromAccount: '4324546657657657',
    fromAccName: 'Suryakant Kumar',
    fromCurrency: '418',
    toAccount: '3649387594374435345',
    toAccName: 'Suryakant Kumar',
    toCurrency: '418',
    amount: '398787',
    refNo: 'MPAY37485087502387985645',
    remarks: 'fund transfer'
  };
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
  }
  close() {
    this.global.navCtrl.pop().then(() => {
      this.global.navCtrl.pop();
    });
  }
  socialShare() {
    
  }
}
