import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-referapp',
  templateUrl: './referapp.page.html',
  styleUrls: ['./referapp.page.scss'],
})
export class ReferappPage implements OnInit {
  offerDate: any = new Date().toISOString();
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
  }

}
