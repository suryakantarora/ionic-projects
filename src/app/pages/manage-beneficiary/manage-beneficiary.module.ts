import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageBeneficiaryPageRoutingModule } from './manage-beneficiary-routing.module';

import { ManageBeneficiaryPage } from './manage-beneficiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageBeneficiaryPageRoutingModule
  ],
  declarations: [ManageBeneficiaryPage]
})
export class ManageBeneficiaryPageModule {}
