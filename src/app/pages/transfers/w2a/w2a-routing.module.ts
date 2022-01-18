import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W2aPage } from './w2a.page';

const routes: Routes = [
  {
    path: '',
    component: W2aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class W2aPageRoutingModule {}
