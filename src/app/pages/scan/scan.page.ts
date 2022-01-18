import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus  } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
declare var QRScanners: any;
@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private qrScanner: QRScanner,
    public platform: Platform,
    public global: GlobalService) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      window.document.querySelector('ion-app').classList.add('transparentBody');
      this.openScanner();
    });
  }


  async openScanner() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
        console.log('Camera Status : ' + JSON.stringify(status));
        if (status.authorized) {
        
          // start scanning
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something : ', text);
            window.document.querySelector('ion-app').classList.add('solidBg');
            // this.qrScanner.destroy();
            // this.global.showAlert('Alert!', text);
            this.closePreview(text);
            this.qrScanner.hide().then();
            scanSub.unsubscribe();
          });

          this.qrScanner.show().then();


        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          this.qrScanner.openSettings();
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          this.qrScanner.openSettings();
        }
      })
      .catch((e: any) => {
        console.log('Error : ' + JSON.stringify(e));
        this.qrScanner.openSettings();
        this.global.pop();
        // this.qrScanner.destroy();
      });
  }
  closePreview(text) {
    // this.qrScanner.destroy();
    window.document.querySelector('ion-app').classList.add('solidBg');
    this.global.navCtrl.pop().then(() => {
      this.global.setPage('/qr-info');
    });
  }
  ionViewWillLeave() {
    this.qrScanner.destroy();
    window.document.querySelector('ion-app').classList.add('solidBg');
  }
}
