// medication.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medication } from './medication.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'http://localhost:3000/medications/findAll'; // Adjust URL according to your backend API

  constructor() { }

  getMedications(): Observable<Medication[]> {
    return new Observable<Medication[]>(observer => {
      fetch(this.apiUrl)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  addMedication(medication: Medication): Observable<Medication> {
    return new Observable<Medication>(observer => {
      fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(medication)
      })
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
