import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferappPageRoutingModule } from './referapp-routing.module';

import { ReferappPage } from './referapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferappPageRoutingModule
  ],
  declarations: [ReferappPage]
})
export class ReferappPageModule {}
