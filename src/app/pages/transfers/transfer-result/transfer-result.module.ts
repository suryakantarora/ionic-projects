import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferResultPageRoutingModule } from './transfer-result-routing.module';

import { TransferResultPage } from './transfer-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferResultPageRoutingModule
  ],
  declarations: [TransferResultPage]
})
export class TransferResultPageModule {}
