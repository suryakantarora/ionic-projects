import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferOptionPage } from './transfer-option.page';

const routes: Routes = [
  {
    path: '',
    component: TransferOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferOptionPageRoutingModule {}
