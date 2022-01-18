import { Injectable } from '@angular/core';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, Platform, PopoverController, ToastController, ToastOptions } from '@ionic/angular';
import { CustomAlertPage } from '../shared/custom-alert/custom-alert.page';
import { LoaderPage } from '../shared/loader/loader.page';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  oneSignalAppID: any = '910fe223-b295-4883-a8c2-0cabf2c0def5';
  googleProjectNumber: any = '998054690281';
  biller: any = {};
  wallet: any = {};
  payFrom: any = 'W';
  public bank: any = {
    shortName: 'INSEE',
    fullName: 'INSEE',
    detailedName: 'Insee Properties',
    poweredBy: 'Insee Properties',
    mobileNumber: '2052102465',
    phoneCode: '+856',
    telephone: '20523232',
    countryCode: 'LAO',
    currencyCode: '418',
    currencySymbol: '₭', // '₹',
    logo: 'assets/imgs/logo/logo.png',
    banner: 'assets/imgs/banner.png',
    promotionSlides: ['', '', '', ''],
    offerDetails: [
      { title: 'Offer Test-1', subTitle: 'Offer subtitle - 1', imgPath: '' },
      { title: 'Offer Test-2', subTitle: 'Offer subtitle - 2', imgPath: '' },
      { title: 'Offer Test-3', subTitle: 'Offer subtitle - 3', imgPath: '' }
    ],
    debitCard: [{
      cardName: 'Suryakant Kumar',
      expiry: { month: '08', year: '2030' },
      cvv: '202',
      cardNumber: '1234 5678 9012 3456',
      cardImage: ''
    }],
    showDebitCard: true,
    showCreditCard: true,
    creditCard: [{
      cardName: 'Suryakant Kumar',
      expiry: { month: '08', year: '30' },
      cvv: '202',
      cardNumber: '1234567890123456',
      cardImage: ''
    }],
    accountList: [
      { accNo: '12345678901231', accName: 'Suryakant Kumar', accType: 'Saving Account', accBal: 23500, currency: '356' }, //840 usd
      { accNo: '12345678901232', accName: 'Suryakant Kumar', accType: 'Payroll Account', accBal: 1000000, currency: '840' },
      { accNo: '12345678901233', accName: 'Suryakant Kumar', accType: 'Fixed Diposit', accBal: 1000000, currency: '764' }
    ]
  };
  public user: any = {
    fullName: 'Suryakant Kumar',
    fame: 'Suryakant',
    lName: 'Kumar',
    nickName: 'Suryakant',
    mobile: '+856-2052102465',
    email: 'surya@insee.com',
    sex: 'M',
    dob: '08-Mar-1989',
    address: 'Vientiane, Laos',
    profilePic: 'assets/imgs/avatars/avatar-2.jpg'
  };
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  showNFCFab = true;
  offers: any = [
    {
      title: '10% cashback!! upto ' + this.getCurrencyText(this.bank.currencyCode) + ' 10,00,000',
      descrption: 'Minimum order ' + this.getCurrencyText(this.bank.currencyCode) + ' 1,00,000',
      imgPath: 'assets/imgs/banners/1.png'
    }, {
      title: 'Flat 5% OFF',
      descrption: 'Use code MTIAXO5',
      imgPath: 'assets/imgs/banners/2.png'
    }, {
      title: 'Summer OFFER',
      descrption: 'Avail 10% instant Discount at the summer OFFER',
      imgPath: 'assets/imgs/banners/3.png'
    }, {
      title: 'Play & Earn',
      descrption: 'Play and get the money directly to your wallet',
      imgPath: 'assets/imgs/banners/4.png'
    },
  ];
  circle: any = ['Vientiane', 'Ban Khunta', 'Ban Phonpapao', 'Xaisettha', 'Dongpalap', 'Nong Beuak', 'Boten'];
  telcom: any = [
    {
      id: 'telcom1',
      logo: 'assets/imgs/telcom/airtel-logo-s.png',
      name: 'Airtel',
      banner: ['assets/imgs/banners/1.png', 'assets/imgs/banners/2.png', 'assets/imgs/banners/3.png', 'assets/imgs/banners/4.png'],
      type: 'Prepaid',
      plans: [
        { amount: 100, description: 'Free 100 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 1-Months' },
        { amount: 500, description: 'Free 500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1000, description: 'Free 1000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1500, description: 'Free 1500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 5-Months' },
        { amount: 2000, description: 'Free 2000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
        { amount: 2500, description: 'Free 2500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
      ]
    }, {
      id: 'telcom2',
      logo: 'assets/imgs/telcom/jio-logo-s.png',
      name: 'Jio',
      banner: ['assets/imgs/banners/1.png', 'assets/imgs/banners/2.png', 'assets/imgs/banners/3.png', 'assets/imgs/banners/4.png'],
      type: 'Prepaid',
      plans: [
        { amount: 100, description: 'Free 100 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 1-Months' },
        { amount: 500, description: 'Free 500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1000, description: 'Free 1000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1500, description: 'Free 1500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 5-Months' },
        { amount: 2000, description: 'Free 2000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
        { amount: 2500, description: 'Free 2500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
      ]
    }, {
      id: 'telcom3',
      logo: 'assets/imgs/telcom/vodafone-logo-s.png',
      name: 'Vodafone',
      banner: ['assets/imgs/banners/1.png', 'assets/imgs/banners/2.png', 'assets/imgs/banners/3.png', 'assets/imgs/banners/4.png'],
      type: 'Prepaid',
      plans: [
        { amount: 100, description: 'Free 100 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 1-Months' },
        { amount: 500, description: 'Free 500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1000, description: 'Free 1000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1500, description: 'Free 1500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 5-Months' },
        { amount: 2000, description: 'Free 2000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
        { amount: 2500, description: 'Free 2500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
      ]
    }, {
      id: 'telcom4',
      logo: 'assets/imgs/telcom/idea-logo-s.png',
      name: 'Idea',
      banner: ['assets/imgs/banners/1.png', 'assets/imgs/banners/2.png', 'assets/imgs/banners/3.png', 'assets/imgs/banners/4.png'],
      type: 'Prepaid',
      plans: [
        { amount: 100, description: 'Free 100 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 1-Months' },
        { amount: 500, description: 'Free 500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1000, description: 'Free 1000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1500, description: 'Free 1500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 5-Months' },
        { amount: 2000, description: 'Free 2000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
        { amount: 2500, description: 'Free 2500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
      ]
    }, {
      id: 'telcom5',
      logo: 'assets/imgs/telcom/bsnl-logo-s.png',
      name: 'BSNL',
      banner: ['assets/imgs/banners/1.png', 'assets/imgs/banners/2.png', 'assets/imgs/banners/3.png', 'assets/imgs/banners/4.png'],
      type: 'Prepaid',
      plans: [
        { amount: 100, description: 'Free 100 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 1-Months' },
        { amount: 500, description: 'Free 500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1000, description: 'Free 1000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 3-Months' },
        { amount: 1500, description: 'Free 1500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 5-Months' },
        { amount: 2000, description: 'Free 2000 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
        { amount: 2500, description: 'Free 2500 talktime along with 1.5GB data/day, 100 sms/day. Data will be throtle to 10kbps after free usage. Validity: 6-Months' },
      ]
    },
  ];
  dashboard = 'A';
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private toast: Toast,
    public screenShot: Screenshot,
    public socialShare: SocialSharing,
    public plt: Platform,
    public contcats: Contacts,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController
  ) { }
  setRoot(page) {
    this.navCtrl.navigateRoot(['/' + page]);
  }
  async shareScreenShot() {
    this.screenShot.URI(50).then(
      res => {
        // console.log(res.URI);
        this.socialShare.share(null, null, res.URI);
      },
      err => {
        console.log('Error while sharing screenshot');
      });
  }
  setPage(page) {
    console.log('Setting Page: ' + page);
    this.navCtrl.navigateForward(['/' + page]).then(() => {
      console.log('Set page success');
    }).catch(err => {
      console.log('Error while set page: ' + JSON.stringify(err));
    });
  }
  pop() {
    this.navCtrl.pop();
  }
  getCurrencyText(currency) {
    let cur = 'LAK';
    if (currency === 'LAK' || currency === '418') {
      return 'LAK';
    } else if (currency === 'THB' || currency === '764') {
      return 'THB';
    } else if (currency === 'USD' || currency === '840') {
      return 'USD';
    } else if (currency === 'INR' || currency === '356') {
      return '₹';
    } else {
      return currency;
    }
  }
  getCurrencyCode(currency) {
    let cur = '418';
    if (currency === 'LAK' || currency === '418') {
      return '418';
    } else if (currency === 'THB' || currency === '764') {
      return '764';
    } else if (currency === 'USD' || currency === '840') {
      return '840';
    } else if (currency === 'INR' || currency === '356') {
      return '356';
    } else {
      return currency;
    }
  }
  async showLoading(time) {
    const loader = await this.modalCtrl.create({
      component: LoaderPage,
      showBackdrop: true,
      backdropDismiss: false,
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
    }, time * 1000);
  }
  async startLoading() {
    return this.modalCtrl.create({
      component: LoaderPage,
      showBackdrop: true,
      backdropDismiss: false,
    });
  }
  async showAlert(head, body) {
    const alert = await this.popoverCtrl.create({
      component: CustomAlertPage,
      mode: 'ios',
      showBackdrop: true,
      componentProps: {
        head: head,
        body: body,
        type: 'ALERT'
      }
    });
    alert.present();
  }
  async showFailedAlert(head, body) {
    const alert = await this.popoverCtrl.create({
      component: CustomAlertPage,
      mode: 'ios',
      showBackdrop: true,
      componentProps: {
        head: head,
        body: body,
        type: 'FAIL'
      }
    });
    alert.present();
  }
  async showSuccessAlert(head, body) {
    const alert = await this.popoverCtrl.create({
      component: CustomAlertPage,
      mode: 'ios',
      showBackdrop: true,
      componentProps: {
        head: head,
        body: body,
        type: 'SUCCESS'
      }
    });
    alert.present();
  }
  async showToast(msg) {
    const toastOptions = {
      mode: 'ios',
      message: msg,
      duration: 3000,
      position: 'top',
      styling: {
        opacity: 0.6, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
        backgroundColor: '#7f171a', // make sure you use #RRGGBB. Default #333333
        textColor: '#FFFFFF', // Ditto. Default #FFFFFF
        textSize: 13, // Default is approx. 13.
        cornerRadius: 100, // minimum is 0 (square). iOS default 20, Android default 100
        horizontalPadding: 60, // iOS default 16, Android default 50
        verticalPadding: 30 // iOS default 12, Android default 30
      }
    };
    this.toast.showWithOptions(toastOptions).subscribe(
      toast => {
        console.log(toast);
      }
    );

  }

  getWeekDay(date) {
    // return this.weekdays[date.getDay()];
    console.log('Current Date: ' + new Date(date));
    const date1 = new Date(date);
    console.log('Day of the week: ' + date1.getDay());
    return this.weekdays[date1.getDay()];
  }

  getMonthName(date) {
    return this.monthName[date];
  }
  async showAllNumber(name, contacts) {
    const buttons: any = [];
    contacts.forEach(number => {
      let mobile = number.value.split('-').join('');
      mobile = number.value.split(' ').join('');
      mobile = mobile.substr(mobile.length - 10);
      console.log('Number: ' + mobile.substr(mobile.length - 10));
      console.log('Length: ' + mobile.length);
      if (mobile.length >= 8) {
        buttons.push({
          text: mobile.substr(mobile.length - 10),
          // icon: 'phone-portrait',
          role: mobile.substr(mobile.length - 10),
          mode: 'ios'
        });
      }
    });
    buttons.push({
      text: 'Cancel',
      icon: 'close',
      role: '',
    });
    const actionSheet = await this.actionSheetCtrl.create({
      header: name,
      mode: 'ios',
      animated: true,
      buttons: buttons
    });
    await actionSheet.present();
    let nmbr = '';
    // const { role } = await actionSheet.onDidDismiss();
    await actionSheet.onDidDismiss().then(data => {
      console.log('Selected Contact: ' + JSON.stringify(data.role));
      nmbr = data.role;
      // this.mobileNumber = data.role;
    });
    return nmbr;
  }

  public formatNumber(num) {
    let numParts;
    // console.log('Num : ' + num);
    const num1 = num + '';
    numParts = num1.toString().split('.');
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numParts.join('.');
  }
  maskedNumber(data: any) {
    const num = '' + data;
    const firstThree = num.substring(0, 3);
    const secondTwo = num.substring(5, 7);
    const lastFour = num.substr(num.length - 4);
    const masked = firstThree + 'X-' + 'XXXX' + '-' + lastFour;
    return masked;
  }
  maskCardNum(data) {
    const num = '' + data;
    const firstFour = num.substring(0, 5);
    const secondTwo = num.substring(5, 7);
    const lastTwo = num.substr(num.length - 4);
    const masked = firstFour + '-XXXX-XXXX-' + lastTwo;
    return masked;
  }
  maskMobile(data: any) {
    const num = '' + data;
    const firstFour = num.substring(0, 3);
    const lastTwo = num.substr(num.length - 2);
    const masked = firstFour + '-' + 'XXXXX' + '-' + lastTwo;
    return masked;
  }
}
