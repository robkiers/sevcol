import { Injectable } from '@angular/core';

@Injectable()
export class TreatmentService {

  treatmentList: any[] = [];

  constructor() { }

  upsertTreatment(treatment) {
    const updateTreatment = this.treatmentList.find(this.findIndexToUpdate, treatment.treatmentID);
    const index = this.treatmentList.indexOf(updateTreatment);

    if (index === -1) {
      this.treatmentList.push(treatment);
    } else {
      this.treatmentList[index] = treatment;
    }
    localStorage.setItem('treatmentList', JSON.stringify(this.treatmentList));
  }

  getTreatmentList(personID: string) {
    if (!this.treatmentList[0]) {
      this.treatmentList = JSON.parse(localStorage.getItem('treatmentList'));
      console.log('retrieving from storage: ', this.treatmentList);
    }
    console.log(this.treatmentList.filter(treatment => treatment.personID === personID));
    return this.treatmentList.filter(treatment => treatment.personID === personID);
    // return this.treatmentList;
  }

  deleteTreatment(treatment) {
    console.log('Deleting: ', treatment);

    if (!!this.treatmentList) {
      const updateTreatment = this.treatmentList.find(this.findIndexToUpdate, treatment.treatmentID);
      const index = this.treatmentList.indexOf(updateTreatment);

      this.treatmentList.splice(index, 1);
      localStorage.setItem('patientList', JSON.stringify(this.treatmentList));
    }
  }

  findIndexToUpdate(newItem) {
    return newItem.personID === this;
  }
}
