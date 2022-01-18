import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-merchant-discount',
  templateUrl: './merchant-discount.page.html',
  styleUrls: ['./merchant-discount.page.scss'],
})
export class MerchantDiscountPage implements OnInit {
  merchants: any = [
    {
      logo: 'assets/imgs/logo/tanishq-logo.png',
      name: 'Tanishq Jwellery',
      mobile: '8083705398',
      address: 'Saidapet Chennai, TN - 600015',
      discount: '15%'
    }, {
      logo: 'assets/imgs/logo/apolo-logo.png',
      name: 'Apolo Hospital',
      mobile: '8083705398',
      address: 'Express Avenue, Egmore Chennai, TN - 600015',
      discount: '20%'
    }, {
      logo: 'assets/imgs/logo/kfc-logo.png',
      name: 'KFC Chicken',
      mobile: '8083705398',
      address: 'Egmore Chennai, TN - 600015',
      discount: '15%'
    }, {
      logo: 'assets/imgs/logo/zara-logo.png',
      name: 'Zara Fashion',
      mobile: '8083705398',
      address: 'Express Avenue, Egmore Chennai, TN - 600015',
      discount: '30%'
    },
  ];
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
  }

}
