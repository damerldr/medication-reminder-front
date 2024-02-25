// medication-list.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationListComponent } from './medication-list.component';

@NgModule({
  declarations: [MedicationListComponent],
  imports: [CommonModule],
  exports: [MedicationListComponent]
})
export class MedicationListModule {}
