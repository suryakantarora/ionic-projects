import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantDiscountPage } from './merchant-discount.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantDiscountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantDiscountPageRoutingModule {}
