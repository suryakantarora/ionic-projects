import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendRequestMoneyPageRoutingModule } from './send-request-money-routing.module';

import { SendRequestMoneyPage } from './send-request-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendRequestMoneyPageRoutingModule
  ],
  declarations: [SendRequestMoneyPage]
})
export class SendRequestMoneyPageModule {}
