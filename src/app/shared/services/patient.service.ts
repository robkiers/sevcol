import { Injectable } from '@angular/core';
import { PATIENT } from 'src/app/core/models';
// import { FirebaseService } from './firebase.service';
// import { AngularFirestore } from '@angular/fire/firestore';

@Injectable(
)
export class PatientService {

  // public get db(): AngularFirestore {
  //   return this._db;
  // }
  // public set db(value: AngularFirestore) {
  //   this._db = value;
  // }

  constructor(
    // private _db: FirebaseService,
  ) { }

  patientList: PATIENT[] = [];

  upsertPatient(patient: PATIENT) {
    // this.db.collection('users').add(patient);
  }

  // upsertPatient(patient: PATIENT) {
  //   const updatePatient = this.patientList.find(this.findIndexToUpdate, patient.personID);
  //   const index = this.patientList.indexOf(updatePatient);

  //   if (index === -1) {
  //     this.patientList.push(patient);
  //   } else {
  //     this.patientList[index] = patient;
  //   }
  //   localStorage.setItem('patientList', JSON.stringify(this.patientList));
  // }

  deletePatient(patient: PATIENT) {
    console.log('Deleting: ', patient);

    if (!!this.patientList) {
      const updatePatient = this.patientList.find(this.findIndexToUpdate, patient.personID);
      const index = this.patientList.indexOf(updatePatient);

      this.patientList.splice(index, 1);
      localStorage.setItem('patientList', JSON.stringify(this.patientList));
    }
  }

  getPatients(): PATIENT[] {
    if (!this.patientList[0]) {
      this.patientList = JSON.parse(localStorage.getItem('patientList'));
      console.log('retrieving from storage: ', this.patientList);
    }
    return this.patientList;
  }

  findIndexToUpdate(newItem) {
    return newItem.personID === this;
  }


  // downloadFile(data: any) {
  //   const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here

  //   const header = Object.keys(data[0]);
  //   let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
  //   csv.unshift(header.join(','));
  //   let csvArray = csv.join('\r\n');

  //   var blob = new Blob([csvArray], { type: 'text/csv' })
  //   saveAs(blob, "myFile.csv");
  // }

}
