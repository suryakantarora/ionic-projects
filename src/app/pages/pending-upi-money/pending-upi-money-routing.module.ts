import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingUpiMoneyPage } from './pending-upi-money.page';

const routes: Routes = [
  {
    path: '',
    component: PendingUpiMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingUpiMoneyPageRoutingModule {}
