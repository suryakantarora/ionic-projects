import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendUpiMoneyPage } from './send-upi-money.page';

const routes: Routes = [
  {
    path: '',
    component: SendUpiMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendUpiMoneyPageRoutingModule {}
