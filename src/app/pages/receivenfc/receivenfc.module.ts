import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivenfcPageRoutingModule } from './receivenfc-routing.module';

import { ReceivenfcPage } from './receivenfc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivenfcPageRoutingModule
  ],
  declarations: [ReceivenfcPage]
})
export class ReceivenfcPageModule {}
