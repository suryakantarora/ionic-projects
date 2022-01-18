import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2aPage } from './a2a.page';

const routes: Routes = [
  {
    path: '',
    component: A2aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2aPageRoutingModule {}
