import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class TreatmentService {

  treatmentHistory = [

    [
      {
        date: '15-07-2988',
        type: 'ab',
      },
      {
        date: '19-11-2988',
        type: 'ab',
      },
      {
        date: '01-02-2989',
        type: 'cf',
      }
    ],
    [
      {
        date: '21-05-2988',
        type: 'ad',
      },
      {
        date: '30-10-2988',
        type: 'cf',
      },
      {
        date: '16-12-2988',
        type: 'ab',
      }
    ]
  ];

  constructor() { }

  getTreatmentHistory(patient) {
    console.log('getTreatment', patient.name);
    console.log('getTreatment', this.treatmentHistory[0]);
    switch (patient.name) {
      case 'Simeon': return of(this.treatmentHistory[0]);
      case 'Alma': return of(this.treatmentHistory[1]);
    }
  }
}
