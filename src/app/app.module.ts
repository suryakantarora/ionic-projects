import { NgModule } from '@angular/core';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderPageModule } from './shared/loader/loader.module';
import { CustomAlertPageModule } from './shared/custom-alert/custom-alert.module';
import { VerifyOtpPageModule } from './modals/verify-otp/verify-otp.module';
import { VerifyPinPageModule } from './modals/verify-pin/verify-pin.module';
import { PinLoginPageModule } from './pages/pin-login/pin-login.module';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CardIO } from '@ionic-native/card-io/ngx';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { RateusPageModule } from './modals/rateus/rateus.module';
import { Device } from '@ionic-native/device/ngx';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { ChartsModule } from 'ng2-charts';
import { VerifyUpiLoadingPageModule } from './modals/verify-upi-loading/verify-upi-loading.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
  LoaderPageModule, CustomAlertPageModule, VerifyOtpPageModule, VerifyPinPageModule,
  PinLoginPageModule, RateusPageModule, ChartsModule, VerifyUpiLoadingPageModule,

],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, OneSignal,
    AndroidFingerprintAuth, Toast, SocialSharing, Screenshot, CardIO, NFC,Ndef, CallNumber, Contacts, QRScanner,
    Device, LaunchReview
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
