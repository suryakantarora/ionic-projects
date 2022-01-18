import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallettransferPageRoutingModule } from './wallettransfer-routing.module';

import { WallettransferPage } from './wallettransfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallettransferPageRoutingModule
  ],
  declarations: [WallettransferPage]
})
export class WallettransferPageModule {}
