import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TreatmentService } from 'src/app/shared/services/treatment.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Injectable()
export class TreatmentStoreService {

  personID;

  constructor(
    private _api: FirebaseService,
  ) { }

  getTreatmentHistory(patient) {
    this.personID = patient.personID;
    // return this._api.getPatientTreatmentList(patient.personID);
  }

  getPersonID() {
    return this.personID;
  }
}
