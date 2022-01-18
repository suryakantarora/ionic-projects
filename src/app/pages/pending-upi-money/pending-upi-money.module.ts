import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingUpiMoneyPageRoutingModule } from './pending-upi-money-routing.module';

import { PendingUpiMoneyPage } from './pending-upi-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingUpiMoneyPageRoutingModule
  ],
  declarations: [PendingUpiMoneyPage]
})
export class PendingUpiMoneyPageModule {}
