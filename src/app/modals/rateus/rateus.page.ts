import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-rateus',
  templateUrl: './rateus.page.html',
  styleUrls: ['./rateus.page.scss'],
})
export class RateusPage implements OnInit {
  pageStatus = 1;
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
  }

}
