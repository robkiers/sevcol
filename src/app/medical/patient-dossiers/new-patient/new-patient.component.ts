import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})

export class NewPatientComponent implements OnInit {

  formGroup: FormGroup;

  originLookup = [
    { value: 'earth', viewValue: 'Earth' },
    { value: 'luna', viewValue: 'Luna' },
    { value: 'mars', viewValue: 'Mars' },
    { value: 'jupiter', viewValue: 'United Moons of Jupiter' },
    { value: 'saturn', viewValue: 'Saturn Collective' },
    { value: 'eden', viewValue: 'Eden' },
    { value: 'kordoss', viewValue: 'Kordoss' },
    { value: 'lux', viewValue: 'Lux' },
    { value: 'lucis', viewValue: 'Lucis' },
    { value: 'voidborne', viewValue: 'Void Borne' }
  ];

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    private router: Router
  ) {
    this.createFormgroup();
  }

  ngOnInit() {
  }

  createFormgroup() {
    this.formGroup = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(200)]],
      otherNames: [null, [Validators.maxLength(200)]],
      familyName: [null, [Validators.required, Validators.maxLength(200)]],

      gender: [null, [Validators.required, Validators.maxLength(200)]],
      height: [null],
      weight: [null],

      origin: [null],
      dateOfBirth: [],
      bloodType: [],
      allele: [],

      organisation: [null],
      ship: [null, [Validators.maxLength(200)]],

      specialAttention: [false, [Validators.required, Validators.maxLength(200)]],
      specialAttentionDescription: [],

      notes: [],

      npc: [false],
      personID: UUID.UUID(),

    });
    this.formGroup.markAllAsTouched();
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.createPatient(saveEntity);
    this.router.navigate(['./patient-list']);
  }

  cancel() {
    this.router.navigate(['']);
  }

}
