import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferResultPage } from './transfer-result.page';

const routes: Routes = [
  {
    path: '',
    component: TransferResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferResultPageRoutingModule {}
