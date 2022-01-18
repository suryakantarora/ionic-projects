import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendnfcPage } from './sendnfc.page';

const routes: Routes = [
  {
    path: '',
    component: SendnfcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendnfcPageRoutingModule {}
