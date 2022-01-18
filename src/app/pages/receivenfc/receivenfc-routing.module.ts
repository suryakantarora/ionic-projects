import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivenfcPage } from './receivenfc.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivenfcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivenfcPageRoutingModule {}
