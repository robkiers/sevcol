import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { PatientService } from 'src/app/shared/services/patient.service';
import { PATIENT } from 'src/app/core/models';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  @Input() set patient(patient: PATIENT) {
    this.populateFormgroup(patient);
  }

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
    { value: 'lucis', viewValue: 'Lucis' }
  ];

  constructor(
    protected _fb: FormBuilder,
    protected _api: PatientService,
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
      patientID: UUID.UUID(),

    });
  }

  populateFormgroup(patient: PATIENT) {
    this.formGroup.reset({
      name: patient.name,
      otherNames: patient.otherNames,
      familyName: patient.familyName,

      gender: patient.gender,
      height: patient.height,
      weight: patient.weight,

      origin: patient.origin,
      dateOfBirth: patient.dateOfBirth,
      bloodType: patient.bloodType,
      allele: patient.allele,


      organisation: patient.organisation,
      ship: patient.ship,

      specialAttention: patient.specialAttention,
      specialAttentionDescription: patient.specialAttentionDescription,

      notes: patient.notes,

      npc: patient.npc,
      patientID: patient.patientID,
    })
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.upsertPatient(saveEntity);
  }

  delete(patient: PATIENT) {
    this._api.deletePatient(patient);
  }

}
