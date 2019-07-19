import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TreatmentService } from 'src/app/shared/services/treatment.service';

@Injectable()
export class TreatmentStoreService {

  personID;

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

  constructor(
    private _api: TreatmentService,
  ) { }

  getTreatmentHistory(patient) {
    this.personID = patient.personID;
    return of(this._api.getTreatmentList(patient.personID)) ;
    // console.log('getTreatment', patient.name, this.personID);
    // console.log('getTreatment', this.treatmentHistory[0]);
    // switch (patient.name) {
    //   case 'simeon': return of(this.treatmentHistory[0]);
    //   case 'alma': return of(this.treatmentHistory[1]);
    // }
  }

  getPersonID() {
    return this.personID;
  }
}
