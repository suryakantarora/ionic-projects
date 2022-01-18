import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendUpiMoneyPageRoutingModule } from './send-upi-money-routing.module';

import { SendUpiMoneyPage } from './send-upi-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendUpiMoneyPageRoutingModule
  ],
  declarations: [SendUpiMoneyPage]
})
export class SendUpiMoneyPageModule {}
