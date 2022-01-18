import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferappPage } from './referapp.page';

const routes: Routes = [
  {
    path: '',
    component: ReferappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferappPageRoutingModule {}
