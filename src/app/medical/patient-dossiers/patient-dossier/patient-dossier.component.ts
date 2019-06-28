import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-dossier',
  templateUrl: './patient-dossier.component.html',
  styleUrls: ['./patient-dossier.component.scss']
})

export class PatientDossierComponent implements OnInit {

  @Input() patient$: any;

  formGroup;

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(
    protected _fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    console.log('input', this.patient$);
    this.createFormgroup();
  }

  createFormgroup() {

    this.formGroup = this._fb.group({
      name: ['', [Validators.required, Validators.maxLength(200)]],
      familyName: ['', [Validators.required, Validators.maxLength(200)]],
      origin: ['', [Validators.required, Validators.maxLength(200)]],
      organisation: ['', [Validators.maxLength(200)]],
      ship: ['', [Validators.maxLength(200)]],
      gender: ['', [Validators.required, Validators.maxLength(200)]],
      patientID: ['', [Validators.required, Validators.maxLength(200)]],
      specialAttention: ['', [Validators.required, Validators.maxLength(200)]],
      NPC: ['', [Validators.required, Validators.maxLength(200)]],
    });

  }
}

// name: 'Simeon',
// familyName: 'Wilde',
// origin: 'Lucis',
// organisation: 'Sevcol',
// ship: 'Celestra',
// gender: 'Male',
// patientID: '6cd985f2-7178-422b-a7c4-d8cc4fb34ab3',
// specialAttention: 'false',
// NPC: 'false',