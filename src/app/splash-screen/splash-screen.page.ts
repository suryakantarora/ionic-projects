import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    public global: GlobalService,
    private menu: MenuController
  ) {
    this.menu.enable(false, 'sideMenu');
  }

  ngOnInit() {
    setTimeout(() => {
      this.global.setRoot('login');
    }, 2000);
  }

}
