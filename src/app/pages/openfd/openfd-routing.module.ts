import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenfdPage } from './openfd.page';

const routes: Routes = [
  {
    path: '',
    component: OpenfdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenfdPageRoutingModule {}
