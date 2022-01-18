import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  services: any= [];
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.initSearchList();
  }
  initSearchList() {
    this.services = [
      { icon: 'account.png', title: 'Open FD Account', url:'fd', desc: 'Place an FD account right from your mobile' },
      { icon: 'offers.png', title: 'Merchant Discount', url:'discount', desc: 'Check the latest discount provided by merchants' },
      { icon: 'top-up.png', title: 'Customer Loyality', url:'loyality', desc: 'Check your loyality points and avail them to get some discounts' },
      { icon: 'bill-payments.png', title: 'Check Book Request', url:'checkbook', desc: 'You are just a click away to get your new checkbook' },
      { icon: 'statement.png', title: 'Email Statement', url:'statement', desc: 'Send your monthly detailed statement to your registered email' },
      { icon: 'favourites.png', title: 'Manage Beneficiary', url:'beneficiary', desc: 'Add, Edit or delete beneficiary for quick transfer' },
      { icon: 'card-info.png', title: 'Cardless Withdrawal', url:'cashout', desc: 'Withdraw cash from ATM without physical card' },
      { icon: 'profile.png', title: 'Update Profile', url:'profile', desc: 'Update your profile detail here' },
      { icon: 'wallet.png', title: 'Close Wallet', url:'wallet', desc: 'Request to close your wallet' },
    ];
  }
  checkPage(url) {
    switch(url) {
      case 'fd': 
        this.global.setPage('openfd');
        break;
      case 'discount': 
        this.global.setPage('merchant-discount');
        break;
      case 'loyality': 
        this.global.setPage('customer-loyality');
        break;
      case 'checkbook':
        this.showConfirmCheckBookRequest();
        break;
      case 'statement': 
        this.sendEmailStatement();
        break;
      case 'beneficiary': 
        this.global.setPage('manage-beneficiary');
        break;
      default:
        this.global.showAlert('Alert!', 'This service is currently not available');
    }
  }
  async showConfirmCheckBookRequest() {
    const alert = await this.global.startLoading();
    alert.present();
    setTimeout(() => {
      alert.dismiss();
      this.global.showSuccessAlert('Success!', 'Checkbook request submitted successfully, Thanks for using INSEE App.');
    }, 1000);
  }
  async sendEmailStatement() {
    const alert = await this.global.startLoading();
    alert.present();
    setTimeout(() => {
      alert.dismiss();
      this.global.showSuccessAlert('Success!', 'Monthly statement will be sent on your registered email, Thanks for using INSEE App.');
    }, 1000);
  }
}
