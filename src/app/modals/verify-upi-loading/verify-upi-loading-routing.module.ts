import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyUpiLoadingPage } from './verify-upi-loading.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyUpiLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyUpiLoadingPageRoutingModule {}
