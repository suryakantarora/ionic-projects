import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferOptionPageRoutingModule } from './transfer-option-routing.module';

import { TransferOptionPage } from './transfer-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferOptionPageRoutingModule
  ],
  declarations: [TransferOptionPage]
})
export class TransferOptionPageModule {}
