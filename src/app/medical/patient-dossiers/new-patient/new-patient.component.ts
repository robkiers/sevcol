import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { UUID } from 'angular2-uuid';
import * as FileSaver from 'file-saver';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  formGroup;

  originLookup = [
    { value: 'earth', viewValue: 'Earth' },
    { value: 'luna', viewValue: 'Luna' },
    { value: 'mars', viewValue: 'Mars' },
    { value: 'jupiter', viewValue: 'United Moons of Jupiter' },
    { value: 'saturn', viewValue: 'Saturn Collective' },
    { value: 'eden', viewValue: 'Eden' },
    { value: 'kordoss', viewValue: 'Kordoss' },
    { value: 'lux', viewValue: 'Lux' },
    { value: 'lucis', viewValue: 'Lucis' }
  ];

  constructor(
    protected _fb: FormBuilder,
    protected _api: PatientService,
  ) { }

  ngOnInit() {
    this.createFormgroup();
  }

  createFormgroup() {

    this.formGroup = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(200)]],
      familyName: [null, [Validators.required, Validators.maxLength(200)]],
      origin: [null, [Validators.required, Validators.maxLength(200)]],
      organisation: [null, [Validators.maxLength(200)]],
      ship: [null, [Validators.maxLength(200)]],
      gender: [null, [Validators.required, Validators.maxLength(200)]],
      patientID: UUID.UUID(),
      specialAttention: [false, [Validators.required, Validators.maxLength(200)]],
      NPC: [false, [Validators.required, Validators.maxLength(200)]],
    });

  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    // FileSaver.saveAs(saveEntity, "export.csv");
    // const blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
    // console.log(blob);

    this._api.showUpdatedItem(saveEntity);
    // this.downloadFile([tries]);
    // FileSaver.saveAs(blob);
  }

  try() {
    const blob = new Blob(["Hello, world!"], { type: "text/csv;charset=utf-8" });
    console.log(blob);

    FileSaver.saveAs(blob);
  }

  downloadFile(data: any) {
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here

    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "myFile.csv");
  }

}
