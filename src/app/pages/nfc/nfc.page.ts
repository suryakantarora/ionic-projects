import { Component, OnInit } from '@angular/core';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
})
export class NfcPage implements OnInit {
  readerMode: any;
  pageStatus: any = 1;
  readingTag:   boolean   = false;
  writingTag:   boolean   = false;
  isWriting:    boolean   = false;
  ndefMsg:      any    = '';
  subscriptions: Array<Subscription> = new Array<Subscription>();
  constructor(
    private nfc: NFC,
    private ndef: Ndef,
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.pageStatus = 1;
    // this.activateNFC();
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
    this.readerMode = this.nfc.readerMode(flags).subscribe((tag: any) => {
          console.log('Scanned NFC: ' + JSON.stringify(tag));
          console.log('NFC Data: ' + JSON.stringify(this.ndef.textRecord(tag)));
        },
        err => console.log('Error reading tag'+ err)
    );
  }
  activateNFC() {
    this.subscriptions.push(this.nfc.addNdefListener().subscribe(data => {
      if (this.readingTag) {
        let payload = data.tag.ndefMessage[0].payload;
        let tagContent = this.nfc.bytesToString(payload).substring(3);
        this.readingTag = false;
        console.log("tag data", tagContent);
      } 
      else if (this.writingTag) {
        if (!this.isWriting) {
          this.isWriting = true;
          this.nfc.write([this.ndefMsg])
            .then(() => {
              this.writingTag = false;
              this.isWriting = false;
              console.log("written");
            })
            .catch(err => {
              this.writingTag = false;
              this.isWriting = false;
            });
        }
      }
    },
    err => {
    
    })
    );
  }
  ionViewWillLeave() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  readTag() {
    this.readingTag = true;
  }

  writeTag(writeText: string) {
    this.writingTag = true;
    this.ndefMsg = this.ndef.textRecord(writeText);
  }
  scanDevice() {
    /* this.pageStatus = 2;
    setTimeout(() => {
      this.global.showToast('Device found');
      this.pageStatus = 3;
    }, 3000); */
    this.global.setPage('sendnfc');
  }
}
