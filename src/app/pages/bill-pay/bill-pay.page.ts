import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-bill-pay',
  templateUrl: './bill-pay.page.html',
  styleUrls: ['./bill-pay.page.scss'],
})
export class BillPayPage implements OnInit {
  billers: any = [];
  slideOpts = {
    initialSlide: 0,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 2000
    }
    
  };
  constructor(
    private global: GlobalService,
    ) { }

  ngOnInit(
  ) {
    this.initBillers();
  }
  
  slideChanged(slides: IonSlides) {
    slides.startAutoplay();
  }
  initBillers() {
    this.billers = [
      { title: 'Water', icon: 'assets/imgs/bill/water-bill-512x512.png', url: 'bill-payment' },
      { title: 'Electricity', icon: 'assets/imgs/bill/electricity-bill-512x512.png', url: 'bill-payment' },
      { title: 'Postpaid', icon: 'assets/imgs/bill/postpaid-bill-512x512.png', url: 'bill-payment' },
      { title: 'Landline', icon: 'assets/imgs/bill/landlin-broadband-bill-512x512.png', url: 'bill-payment' },
      { title: 'LPG', icon: 'assets/imgs/bill/gas-bill-512x512.png', url: 'bill-payment' },
      { title: 'DTH', icon: 'assets/imgs/bill/dth-bill-512x512.png', url: 'bill-payment' },
      { title: 'Credit Card', icon: 'assets/imgs/bill/credit-card-bill-512x512.png', url: 'bill-payment' },
      { title: 'Premium', icon: 'assets/imgs/bill/premium-bill-512x512.png', url: 'bill-payment' },
      { title: 'Tax', icon: 'assets/imgs/bill/tax-bill-512x512.png', url: 'bill-payment' },
    ];
  }
  async proceddPayment(p) {
    this.global.biller = p;
    this.global.navCtrl.navigateForward('bill-payment').catch(err => {
      console.error('Error: ' + (err));
    });
  }
}
