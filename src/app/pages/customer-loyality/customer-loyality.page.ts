import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-loyality',
  templateUrl: './customer-loyality.page.html',
  styleUrls: ['./customer-loyality.page.scss'],
})
export class CustomerLoyalityPage implements OnInit {
  loyalities: any = [
    {
      banner: 'assets/imgs/loyality/coffee-sm.jpg',
      name: 'Dada Coffee',
      points: 200
    }, {
      banner: 'assets/imgs/loyality/music-sm.jpg',
      name: 'Wink Music',
      points: 500
    },  {
      banner: 'assets/imgs/loyality/hospital-sm.jpg',
      name: 'Body Checkup',
      points: 1500
    }, 
  ];

  constructor() { }

  ngOnInit() {
  }

}
