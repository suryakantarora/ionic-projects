import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2wPageRoutingModule } from './a2w-routing.module';

import { A2wPage } from './a2w.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2wPageRoutingModule
  ],
  declarations: [A2wPage]
})
export class A2wPageModule {}
