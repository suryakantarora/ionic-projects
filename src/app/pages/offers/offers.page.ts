import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offersData: any=[];
  constructor( public global: GlobalService) { 
    this.offersData = this.global.offers;
  }

  ngOnInit() {
  }

}
