import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerLoyalityPage } from './customer-loyality.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerLoyalityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerLoyalityPageRoutingModule {}
