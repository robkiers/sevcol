import { Injectable } from '@angular/core';

@Injectable(
)
export class PatientService {

  patientList = [
    {
      a: '1',
      b: '2',
    },
    {
      a: '3',
      b: '4'
    }
  ];

  upsertPatient(patient) {

    // patient.patientID
    this.patientList.push(patient);
    localStorage.setItem('menuOrientation', patient);

  }

  getPatients() {
    const retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }

  // Storage.prototype.setObject = function (key, value) {
  //   this.setItem(key, JSON.stringify(value));
  // }

  // Storage.prototype.getObject = function (key) {
  //   var value = this.getItem(key);
  //   return value && JSON.parse(value);
  // }


  showUpdatedItem(newItem) {
    localStorage.setItem('testObject', JSON.stringify(this.patientList));

    // console.log(this.patientList);
    // const updateItem = this.patientList.find(this.findIndexToUpdate, newItem.patientID);
    // console.log(updateItem);
    // const index = this.patientList.indexOf(updateItem);
    // console.log(index);

    // if (index === -1) {
    //   this.patientList.push(newItem);
    // } else {
    //   this.patientList[index] = newItem;
    // }

  }

  findIndexToUpdate(newItem) {
    return newItem.patientID === this;
  }

}
