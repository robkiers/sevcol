import { Injectable, OnInit } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';

@Injectable()
export class PatientdossiersService implements OnInit {

  patientList = [
    {
      name: 'Simeon',
      familyName: 'Wilde',
      origin: 'Lucis',
      organisation: 'Sevcol',
      ship: 'Celestra',
      gender: 'Male',
      patientID: '6cd985f2-7178-422b-a7c4-d8cc4fb34ab3',
      specialAttention: 'false',
      bloodGroup: 'AB',
      dateOfBirth: '',
      NPC: 'false',
      relationshipStatus: '',
      contact: {
        adress: '',
        city: '',
        region: '',
        planet: '',
        email: '',
        phone: ''
      },
    },
    {
      name: 'Alma',
      familyName: 'Chadez',
      origigin: 'Mars',
      organisation: 'Cartel',
      ship: 'Celestra',
      gender: 'Female',
      patientID: '3c8f2d75-5f56-44fa-848a-3515ae776a4e',
      specialAttention: 'false',
      bloodGroup: 'AB',
      dateOfBirth: '',
      NPC: 'false',
      relationshipStatus: '',
      contact: {
        adress: '',
        city: '',
        region: '',
        planet: '',
        email: '',
        phone: ''
      },
    }
  ];

  // patient: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    // this.setPatientList();
  }

  ngOnInit() {
    console.log('container service', this.patientList);

  }

  getPatientList() {
    return of(this.patientList);
  }



  // setPatient(patient) {
  //   this.patient.next(patient);
  // }
}
