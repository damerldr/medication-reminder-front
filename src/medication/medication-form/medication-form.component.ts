// medication-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicationService } from '../medication.service';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnInit {
  medicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private medicationService: MedicationService) {
    this.medicationForm = this.formBuilder.group({
      name: ['', Validators.required],
      dosage: ['', Validators.required],
      frequency: ['', Validators.required],
      // Add more fields as needed
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.medicationForm.valid) {
      this.medicationService.addMedication(this.medicationForm.value).subscribe(() => {
        console.log('Medication added successfully');
        // Reset form after submission
        this.medicationForm.reset();
      });
    }
  }
}
