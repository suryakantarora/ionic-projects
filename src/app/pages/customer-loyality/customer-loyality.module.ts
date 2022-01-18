import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerLoyalityPageRoutingModule } from './customer-loyality-routing.module';

import { CustomerLoyalityPage } from './customer-loyality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerLoyalityPageRoutingModule
  ],
  declarations: [CustomerLoyalityPage]
})
export class CustomerLoyalityPageModule {}
