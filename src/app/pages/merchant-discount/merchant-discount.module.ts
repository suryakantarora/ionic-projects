import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantDiscountPageRoutingModule } from './merchant-discount-routing.module';

import { MerchantDiscountPage } from './merchant-discount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantDiscountPageRoutingModule
  ],
  declarations: [MerchantDiscountPage]
})
export class MerchantDiscountPageModule {}
