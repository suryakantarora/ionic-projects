import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendRequestMoneyPage } from './send-request-money.page';

const routes: Routes = [
  {
    path: '',
    component: SendRequestMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendRequestMoneyPageRoutingModule {}
