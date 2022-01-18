import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyUpiPage } from './verify-upi.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyUpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyUpiPageRoutingModule {}
