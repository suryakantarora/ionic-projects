import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2wPage } from './a2w.page';

const routes: Routes = [
  {
    path: '',
    component: A2wPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2wPageRoutingModule {}
