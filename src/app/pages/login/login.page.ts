import { Component, OnInit } from '@angular/core';
import { AFAAuthOptions, AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { MenuController, NavController } from '@ionic/angular';
import { PinLoginPage } from 'src/app/pages/pin-login/pin-login.page';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: any;
  password: any;
  constructor(
    public global: GlobalService,
    private navCtrl: NavController,
    private androidFingerprintAuth: AndroidFingerprintAuth,
    private menu: MenuController
  ) {
    this.menu.enable(false, 'sideMenu');
  }

  ngOnInit() {
    // this.global.showLoading(1);
  }
  loginValidation() {
    // this.navCtrl.navigateRoot('/tabs');
    if ((this.userName === this.password) && (this.password !== '' && this.password !== null && this.password !== undefined)) {
      this.navCtrl.navigateRoot('/tabs');
    } else {
      this.global.showAlert('Alert!', 'Username or password is invalid, Please check and try again');
    }
  }
  async pinLogin() {
    const pinPage = await this.global.modalCtrl.create({
      component: PinLoginPage
    });
    await pinPage.present();
    await pinPage.onDidDismiss().then(pin => {
      console.log('Pin : ' + pin.data);
    });
  }
  async biometricLogin() {
    this.androidFingerprintAuth.isAvailable().then((result)=> {
    if(result.isAvailable){
      // it is available
      const option: AFAAuthOptions = { 
        clientId: 'insee', 
        username: 'insee', 
        password: 'insee', 
        dialogTitle: 'Biometric Authentication',
        dialogMessage: 'Authenticate your finger',
        dialogHint: 'Scan your finger',
        disableBackup: true
      };
      this.androidFingerprintAuth.encrypt(option).then(result => {
           if (result.withFingerprint) {
               console.log('Successfully encrypted credentials.');
               console.log('Encrypted credentials: ' + result.token);
               this.global.navCtrl.navigateRoot('tabs').then(() => {
                // this.global.showToast('Successfully validated');
               });
           } else {
             console.log('Didn\'t authenticate!');
             this.global.showToast('Didn\'t authenticate!');
          }
        })
        .catch(error => {
           if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
             console.log('Fingerprint authentication cancelled');
             this.global.showToast('Fingerprint authentication cancelled')
           } else {
            console.error(error)
            // this.global.showAlert('Error', JSON.stringify(error));
           }
        });

    } else {
      // fingerprint auth isn't available
      this.global.showAlert('Alert', 'Sorry, Biometric is not available in your device');
    }
  }).catch(error => console.error(error));
  }
}
