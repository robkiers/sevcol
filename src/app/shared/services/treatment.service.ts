import { Injectable } from '@angular/core';

@Injectable()
export class TreatmentService {

  treatmentList: any[] = [];

  constructor() { }

  upsertTreatment(treatment) {
    const updateTreatment = this.treatmentList.find(this.findIndexToUpdate, treatment.personID);
    const index = this.treatmentList.indexOf(updateTreatment);

    if (index === -1) {
      this.treatmentList.push(treatment);
    } else {
      this.treatmentList[index] = treatment;
    }
    localStorage.setItem('treatmentList', JSON.stringify(this.treatmentList));
    console.log(this.treatmentList);
  }

  findIndexToUpdate(newItem) {
    return newItem.personID === this;
  }
}
