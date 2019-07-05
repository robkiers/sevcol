import { Injectable, OnInit } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import { PatientService } from 'src/app/shared/services/patient.service';

@Injectable()
export class PatientdossiersService implements OnInit {

  // patient: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    protected _api: PatientService,
  ) { }

  ngOnInit() {
    console.log('container service');

  }

  getPatientList() {
    return of(this._api.getPatients());
  }



  // setPatient(patient) {
  //   this.patient.next(patient);
  // }
}
