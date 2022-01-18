import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.page.html',
  styleUrls: ['./upi.page.scss'],
})
export class UpiPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 2000
    }
    
  };
  sliders = [
    {imagePath: 'assets/imgs/banners/upi-banner-1.png'},
    {imagePath: 'assets/imgs/banners/upi-banner-2.png'},
  ];
  recent: any = [
    {name: 'Suryakant Kumar', mobile: '8083705398', imgPath: 'assets/imgs/avatars/avatar-1.jpg', amount: 1000, status: 'S'},
    {name: 'Ritunjay Kumar', mobile: '8083705398', imgPath: 'assets/imgs/avatar-woman.png', amount: 3000, status: 'S'},
    {name: 'Abha Kumari', mobile: '8083705398', imgPath: 'assets/imgs/avatars/avatar-1.jpg', amount: 5000, status: 'F'},
    {name: 'Durga Nageshwar Rao', mobile: '8083705398', imgPath: 'assets/imgs/avatar-man.png', amount: 1500, status: 'S'},
    {name: 'Suryakant Kumar', mobile: '8083705398', imgPath: 'assets/imgs/avatars/avatar-1.jpg', amount: 2000, status: 'S'},
    {name: 'Suryakant Kumar', mobile: '8083705398', imgPath: 'assets/imgs/avatars/avatar-1.jpg', amount: 5000, status: 'S'},
  ];
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
  }

  slideChanged(slides: IonSlides) {
    slides.startAutoplay();
  }
}
