import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchList: any= [];
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.initSearchList();
  }
  initSearchList() {
    this.searchList = [
      { icon: 'account.png', title: 'Accounts', url:'accounts' },
      { icon: 'bill-payments.png', title: 'Bill Payments', url:'bill-pay' },
      { icon: 'card-info.png', title: 'Card Info', url:'manage-card' },
      { icon: 'favourites.png', title: 'Favourite Transactions', url:'favourite' },
      { icon: 'statement.png', title: 'Statement', url:'statement' },
      { icon: 'profile.png', title: 'Profile', url:'profile' },
      { icon: 'settings-2.png', title: 'Settings', url:'settings' },
      { icon: 'offers.png', title: 'Offers', url:'offers' },
      { icon: 'top-up.png', title: 'Mobile Topup', url:'topup' },
      { icon: 'wallet.png', title: 'Wallet', url:'wallet' },
      { icon: 'qr-pay-1.png', title: 'Scan & Pay', url:'scanqr' },
      { icon: 'quick-pay.png', title: 'Quick Pay', url:'quick-pay' },
      { icon: 'share-1.png', title: 'Share App with friends'},
    ];
  }
}
