import { Component, OnInit } from '@angular/core';
import { CardIO } from '@ionic-native/card-io/ngx';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  constructor(
    public global: GlobalService,
    private cardIO: CardIO
  ) { }

  ngOnInit() {
  }
  scanCard() {
    this.cardIO.canScan().then((res: boolean) => {
      if(res){
        let options = {
          requireExpiry: true,
          requireCVV: false,
          requirePostalCode: false
        };
        this.cardIO.scan(options).then(data => {
          console.log('Card: ' + JSON.stringify(data));
          this.global.showSuccessAlert('Success', 'Card added successfully').then(() => {
            this.global.pop();
          });
        });
      }
    }
  );
  }
  showSuccess() {
    this.global.showSuccessAlert('Success', 'Card added successfully').then(() => {
      this.global.pop();
    });
  }
}
