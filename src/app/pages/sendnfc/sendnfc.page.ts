import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sendnfc',
  templateUrl: './sendnfc.page.html',
  styleUrls: ['./sendnfc.page.scss'],
})
export class SendnfcPage implements OnInit {
  pageStatus: any = 1;
  today: any = new Date().toISOString();
  constructor(
    public global:  GlobalService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.global.showToast('Device found');
      this.pageStatus = 2;
    }, 5000);
  }
  async proceedPayment() {
    const loader = await this.global.startLoading();
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.pageStatus = 4;
    }, 4000);
  }
}
