import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  messageData: any[] = [
    {
      sender: 'robo',
      message: 'Hi, How may I help you? Please select your choice from below options.',
      options: [
        {id: '1', text: 'Balance Enquiry'},
        {id: '2', text: 'Last five transactions'},
        {id: '3', text: 'Update Mobile Number'},
        {id: '4', text: 'Update Email Address'},
        {id: '5', text: 'Other Query'},
      ],
      date: new Date().toISOString(),
      lastFiveTxns: []
    }
  ];
  message: any;
  today: any = new Date().toISOString();
  constructor(public global: GlobalService) { }

  ngOnInit() {
  }



  formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  optionClicked(msg) {
    console.log('Message: ' + msg.text);
    this.message = '';
    const msgDetail = {
      sender: 'user',
      message: msg.text,
      date: new Date().toISOString()
    };
    this.messageData.push(msgDetail);
    this.roboReply(msg.id);
  }
  roboReply(option) {
    console.log('Option: ' + option);
    let msg = '';
    let stmt = [];
    switch(option) {
      case '1': {
        msg = 'Hi ' +this.global.user.nickName+ ', Your account balance is: ' + 
        this.global.getCurrencyText(this.global.bank.currencyCode) +' ' + this.global.formatNumber(this.generateRandomAmt(10)) + 
        ' Do you have any other query?\n';
        this.addRoboReply(msg, []);
        break;
      } 
      case '2': {
        msg = 'Hi ' +this.global.user.nickName+ ', Your Last five transactions are: \n';
        stmt = [{type:'Mobile Topup ', amount: this.global.getCurrencyText(this.global.bank.currencyCode) + this.global.formatNumber(this.generateRandomAmt(5))},
        {type:'Mobile Topup ', amount: this.global.getCurrencyText(this.global.bank.currencyCode) + this.global.formatNumber(this.generateRandomAmt(5))},
        {type:'Wallet Topup ', amount: this.global.getCurrencyText(this.global.bank.currencyCode) + this.global.formatNumber(this.generateRandomAmt(5))},
        {type:'Fund Transfer ', amount: this.global.getCurrencyText(this.global.bank.currencyCode) + this.global.formatNumber(this.generateRandomAmt(5))},
        {type:'Bill Payment ', amount: this.global.getCurrencyText(this.global.bank.currencyCode) + this.global.formatNumber(this.generateRandomAmt(5))}]
        this.addRoboReply(msg, stmt);
        break;
      }
      default: { 
        msg = 'Hi ' +this.global.user.nickName+ ', This service is currently not available here, Please contact customer care: \n';
        this.addRoboReply(msg, []);
        break; 
      }
    }
  }
  addRoboReply(text, stmt) {
    const msg = {
      sender: 'robo',
      message: text,
      options: [
        {id: '1', text: 'Balance Enquiry'},
        {id: '2', text: 'Last five transactions'},
        {id: '3', text: 'Update Mobile Number'},
        {id: '4', text: 'Update Email Address'},
        {id: '5', text: 'Other Query'},
      ],
      date: new Date().toISOString(),
      lastFiveTxns: stmt
    };
    this.messageData.push(msg);
    setTimeout(() => {
      this.ScrollToBottom();
    }, 300);
  }
  validateMessage(msg) {
    console.log('Message: ' + msg);
    this.message = '';
    const msgDetail = {
      sender: 'user',
      message: msg,
      date: new Date().toISOString()
    };
    this.messageData.push(msgDetail);
    this.addRoboReply('Hi ' +this.global.user.nickName+ ', This service is currently not available here, Please contact customer care: \n', [])
    setTimeout(() => {
      this.ScrollToBottom();
    }, 300);
  }
  generateRandomAmt(length) {
    var result           = '';
    var characters       = '1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }
  logScrollStart(event) {
    // console.log("logScrollStart : When Scroll Starts", event);
    console.log('started scroll');
  }

  logScrolling(event) {
    // console.log("logScrolling : When Scrolling", event);
    // console.log('scrolling');
  }

  logScrollEnd(event) {
    // console.log("logScrollEnd : When Scroll Ends", event);
    console.log('End scroll');
  }

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

}
