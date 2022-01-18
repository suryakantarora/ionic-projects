import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyUpiLoadingPageRoutingModule } from './verify-upi-loading-routing.module';

import { VerifyUpiLoadingPage } from './verify-upi-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyUpiLoadingPageRoutingModule
  ],
  declarations: [VerifyUpiLoadingPage]
})
export class VerifyUpiLoadingPageModule {}
