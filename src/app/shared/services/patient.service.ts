import { Injectable } from '@angular/core';

@Injectable(
)
export class PatientService {

  patientList = [];

  upsertPatient(patient) {

    // patient.patientID
    this.patientList.push(patient);
  }


  showUpdatedItem(newItem) {

    console.log(this.patientList);
    let updateItem = this.patientList.find(this.findIndexToUpdate, newItem.patientID);
    console.log(updateItem);
    let index = this.patientList.indexOf(updateItem);
    console.log(index);
    this.patientList[index] = newItem;

  }

  findIndexToUpdate(newItem) {
    return newItem.patientID === this;
  }

}
