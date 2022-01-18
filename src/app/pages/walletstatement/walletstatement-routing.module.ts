import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletstatementPage } from './walletstatement.page';

const routes: Routes = [
  {
    path: '',
    component: WalletstatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletstatementPageRoutingModule {}
