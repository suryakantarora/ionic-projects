import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenfdPageRoutingModule } from './openfd-routing.module';

import { OpenfdPage } from './openfd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenfdPageRoutingModule
  ],
  declarations: [OpenfdPage]
})
export class OpenfdPageModule {}
