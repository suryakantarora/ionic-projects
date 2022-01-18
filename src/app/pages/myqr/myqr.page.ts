import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-myqr',
  templateUrl: './myqr.page.html',
  styleUrls: ['./myqr.page.scss'],
})
export class MyqrPage implements OnInit {

  constructor(
    public global: GlobalService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }
  qrShare() {
    this.httpClient.get('/assets/imgs/myqr-code.png').subscribe(
      (data:any) => {
        console.log(data.url);
        var options = {
          message: 'My QR', // not supported on some apps (Facebook, Instagram)
          subject: 'My QR', // fi. for email
          files: [data.URI], // an array of filenames either locally or remotely
          url: 'https://www.website.com/foo/#bar?a=b',
          chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
        };
        this.global.socialShare.shareWithOptions(options);
      }, err => {
        console.warn(JSON.stringify(err));
      }
    );
  }
}
