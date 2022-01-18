import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2aPageRoutingModule } from './a2a-routing.module';

import { A2aPage } from './a2a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2aPageRoutingModule
  ],
  declarations: [A2aPage]
})
export class A2aPageModule {}
