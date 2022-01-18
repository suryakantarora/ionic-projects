import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletstatementPageRoutingModule } from './walletstatement-routing.module';

import { WalletstatementPage } from './walletstatement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletstatementPageRoutingModule
  ],
  declarations: [WalletstatementPage]
})
export class WalletstatementPageModule {}
