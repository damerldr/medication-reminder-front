// medication-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Medication } from '../medication.model';
import { MedicationService } from '../medication.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {
  medications: Medication[] = [];

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.getMedications();
  }

  getMedications(): void {
    this.medicationService.getMedications()
      .subscribe(
        medications => {
          this.medications = medications;
        },
        error => {
          console.error('Error fetching medications:', error);
        }
      );
  }
}
