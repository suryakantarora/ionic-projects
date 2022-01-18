import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  today:any = new Date().toDateString();
  yesterday: any;
  dayBeforeYesterday: any;
  recents: any = [];
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    // this.yesterday = this.today.getDay() - 1;
    const today = new Date();
    const yesterday = new Date(today);
    const dayBeforeYesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

    today.toDateString();
    yesterday.toDateString();
    this.yesterday = yesterday.toDateString();
    this.dayBeforeYesterday = dayBeforeYesterday.toDateString();
    console.log('today: ' + today);
    console.log('yesterday: ' + yesterday);
    console.log('dayBeforeYesterday: ' + dayBeforeYesterday);
    this.initRecent();
  }
  initRecent() {
    this.recents = [
      {
        date: this.today,
        data: [{
          amount: '1,000.00',
          type: 'Mobile Topup',
          name: 'Airtel Prepaid',
          to: '8083705398',
          date: this.today
        },{
          amount: '1,000.00',
          type: 'Mobile Topup',
          name: 'Jio Prepaid',
          to: '8083705398',
          date: this.today
        },{
          amount: '1,100.00',
          type: 'Electricity Bill',
          name: 'TNCEB',
          to: '987256987435',
          date: this.today
        },
      ]}, 
      {
        date: this.yesterday,
        data: [{
          amount: '10,000.00',
          type: 'Fund Transfer',
          name: 'Suryakant Arora',
          to: '3298472364786435',
          date: this.yesterday
        }
      ]}, 
      {
        date: this.dayBeforeYesterday, 
        data: [{
          amount: '11,000.00',
          type: 'Water Bill Payment',
          name: 'Bharat Sarkar',
          date: this.dayBeforeYesterday
        },{
          amount: '5,000.00',
          type: 'Fund Transfer',
          name: 'Durga Nagesh Rao',
          to: '9876524387563298',
          date: this.dayBeforeYesterday
        },{
          amount: '10,000.00',
          type: 'Wallet Topup',
          name: 'Self Wallet Topup',
          to: '46456747764',
          date: this.dayBeforeYesterday
        },
      ]}, 
    ];
  }
  getWeekDay(date) {
    // return this.weekdays[date.getDay()];
    console.log('Current Date: ' +  new Date(date));
    const date1 = new Date(date);
    console.log('Day of the week: ' +  date1.getDay());
    return this.weekdays[date1.getDay()];
  }
}