import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../app/services/global.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.page.html',
  styleUrls: ['./recent.page.scss'],
})
export class RecentPage implements OnInit {
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
      {date: this.today, data: [ 
        {
          amount: '1,000.00',
          type: 'DR',
          name: 'Suryakant Arora',
          date: this.today
        },{
          amount: '12,500.00',
          type: 'CR',
          name: 'Durga Nagesh Rao',
          date: this.today
        },{
          amount: '1,100.00',
          type: 'DR',
          name: 'McDonald\'s',
          date: this.today
        },
      ]}, 
      {date: this.yesterday, data: [ 
        {
          amount: '10,000.00',
          type: 'DR',
          name: 'Suryakant Arora',
          date: this.yesterday
        }
      ]}, 
      {date: this.dayBeforeYesterday, data: [ 
        {
          amount: '11,000.00',
          type: 'DR',
          name: 'Suryakant Arora',
          date: this.dayBeforeYesterday
        },{
          amount: '5,000.00',
          type: 'CR',
          name: 'Durga Nagesh Rao',
          date: this.dayBeforeYesterday
        },{
          amount: '10,000.00',
          type: 'DR',
          name: 'McDonald\'s',
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
