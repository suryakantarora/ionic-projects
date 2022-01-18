import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-verify-upi-loading',
  templateUrl: './verify-upi-loading.page.html',
  styleUrls: ['./verify-upi-loading.page.scss'],
})
export class VerifyUpiLoadingPage implements OnInit {

  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.close('VALID');
    }, 2000);
  }
  close(data) {
    this.global.modalCtrl.dismiss(data);
  }

}
