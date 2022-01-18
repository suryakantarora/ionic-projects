import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyUpiPageRoutingModule } from './verify-upi-routing.module';

import { VerifyUpiPage } from './verify-upi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyUpiPageRoutingModule
  ],
  declarations: [VerifyUpiPage]
})
export class VerifyUpiPageModule {}
