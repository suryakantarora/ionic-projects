import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallettransferPage } from './wallettransfer.page';

const routes: Routes = [
  {
    path: '',
    component: WallettransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WallettransferPageRoutingModule {}
