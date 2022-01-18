import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageBeneficiaryPage } from './manage-beneficiary.page';

const routes: Routes = [
  {
    path: '',
    component: ManageBeneficiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageBeneficiaryPageRoutingModule {}
