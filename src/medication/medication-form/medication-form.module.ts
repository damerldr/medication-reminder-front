// medication-form.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MedicationFormComponent } from './medication-form.component';

@NgModule({
  declarations: [
    MedicationFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MedicationFormComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicationFormModule { }
