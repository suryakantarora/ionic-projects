import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-manage-card',
  templateUrl: './manage-card.page.html',
  styleUrls: ['./manage-card.page.scss'],
})
export class ManageCardPage implements OnInit {
  cardType: any = 'debit';
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
  }

}
