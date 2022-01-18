import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { W2aPageRoutingModule } from './w2a-routing.module';

import { W2aPage } from './w2a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    W2aPageRoutingModule
  ],
  declarations: [W2aPage]
})
export class W2aPageModule {}
