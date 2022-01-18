import { Component, OnInit } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 2000
    }
  };
  wallets: any = [];
  segment = 'wallet';
  today:any = new Date().toDateString();
  yesterday: any;
  dayBeforeYesterday: any;
  recents: any = [];
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  constructor(public global: GlobalService,
    private menu: MenuController) {
      this.menu.enable(true);
      this.global.dashboard = 'W';
    }

  ngOnInit() {
    // this.yesterday = this.today.getDay() - 1;
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
  
  slideChanged(slides: IonSlides) {
    slides.startAutoplay();
  }
  async refreshBalance() {
    const loading = await this.global.startLoading();
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.global.showToast('Balance updated');
    }, 2000);
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
  getWeekDay(date) {
    // return this.weekdays[date.getDay()];
    console.log('Current Date: ' +  new Date(date));
    const date1 = new Date(date);
    console.log('Day of the week: ' +  date1.getDay());
    return this.weekdays[date1.getDay()];
  }


  toggleMenu() {
    this.menu.toggle();
  }
  addmoney() {

  }
  walletTransfer() {
    
  }
  waltoacntTransfer() {
    
  }
  acntToWalTransfer() {
    
  }
  openWalletStatement() {
    
  }
  openRecharge() {
    
  }
  openBill() {
    
  }
  openOffersPage() {
    this.global.setPage('offers');
  }
  openScanPay() {
    this.global.setPage('scan');
  }
  kycAlert() {
    
  }
  async proceddPayment(p) {
    if(p == 'W2W'){
      this.wallets = [ 
        { title: 'Wallet to Wallet', icon: 'assets/imgs/wallet/wallet-wallet.png' } 
      ];
    } else if(p == 'W2A'){
      this.wallets = [ 
        { title: 'Wallet to Account', icon: 'assets/imgs/wallet/wallet-account.png' } 
      ];
    } else if(p == 'A2W'){
      this.wallets = [ 
        { title: 'Account to Wallet', icon: 'assets/imgs/wallet/account-wallet.png' } 
      ];
    } else {
      this.wallets = [ 
        { title: 'Statments', icon: 'assets/imgs/wallet/wallet-statement.png' } 
      ];
    }
    this.global.wallet = this.wallets;
    this.global.navCtrl.navigateForward('wallettransfer').catch(err => {
      console.error('Error: ' + (err));
    });
  }

  segmentChanged(ev) {

  }
}
