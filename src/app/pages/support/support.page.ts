import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(
    public global: GlobalService,
    private socialShare: SocialSharing,
    private callNumber: CallNumber,
  ) { }

  ngOnInit() {
  }
  openMail() {
    this.socialShare.shareViaEmail('', 'InSee Support', ['surya@insee.com']);
  }
  openWhatsApp() {
   window.open(`https://api.whatsapp.com/send?phone=${this.global.user.mobile}`);
   // this.socialShare.shareViaWhatsApp('Hi', null, null);
  }
  openSms() {
    this.socialShare.shareViaSMS('InSee Support', this.global.user.mobile);
  }
  openDialer() {
    this.callNumber.callNumber(this.global.user.mobile, false);
  }
}
