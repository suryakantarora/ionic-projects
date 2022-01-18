import { Component, OnInit } from '@angular/core';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { IonSlide, IonSlides, MenuController } from '@ionic/angular';
import { RateusPage } from 'src/app/modals/rateus/rateus.page';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  activeBtn: any = 1;
  slideOpts = {
    initialSlide: 0,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 2000
    }
    
  };
  sliders = [{
      header: 'Easy Transfer',
      para: 'Transfer funds from any bank to INSEE',
      imagePath: 'assets/imgs/promo/promo-1.png'
    }, {
      header: 'Manage Beneficiary',
      para: 'Add or remove the beneficiary for faster payment',
      imagePath: 'assets/imgs/promo/promo-2.png'
    }, {
      header: 'Chat & Pay',
      para: 'Get assured before you pay the right person',
      imagePath: 'assets/imgs/promo/promo-3.png'
    }, {
      header: 'Earn Reward',
      para: '100% assured reward on your every transactions',
      imagePath: 'assets/imgs/promo/promo-4.png'
    },
  ];
  constructor(
    public global: GlobalService,
    public launchReview: LaunchReview,
    private menu: MenuController
  ) {
    this.rateUs();
    this.menu.enable(true, 'sideMenu');
    this.menu.swipeGesture(false, 'sideMenu');
  }

  ngOnInit() {
  }
  toggleMenu() {
    this.menu.toggle();
  }
  
  slideChanged(slides: IonSlides) {
    slides.startAutoplay();
  }
  ionViewDidLoad() {
  }
  async rateUs() {
    const rateus = await this.global.modalCtrl.create({
      component: RateusPage
    });
    rateus.present();
    rateus.onDidDismiss().then(data => {
      console.log('RateUs: ' + data.data);
      if (data.data === 1) {
        this.reviewLauncher();
      }
    });
  }
  reviewLauncher() {
    if(this.launchReview.isRatingSupported()){
      this.launchReview.launch().then(() => console.log('Successfully launched rating dialog'));
    }
  }
}
