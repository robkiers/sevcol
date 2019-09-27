import { Injectable, OnInit } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
// import { PatientService } from 'src/app/shared/services/patient.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Injectable()
export class PatientdossiersService implements OnInit {

  // patient: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    protected _api: FirebaseService,
  ) { }

  ngOnInit() {
    console.log('container service');

  }

  getPatientList() {
    return this._api.getPatientList();
    // return of(this._api.getPatientList());
  }



  // setPatient(patient) {
  //   this.patient.next(patient);
  // }
}
