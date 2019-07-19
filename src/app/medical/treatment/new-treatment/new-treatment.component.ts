import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/services/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { TreatmentService } from 'src/app/shared/services/treatment.service';
import { TreatmentStoreService } from '../treatment.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-new-treatment',
  templateUrl: './new-treatment.component.html',
  styleUrls: ['./new-treatment.component.scss']
})
export class NewTreatmentComponent implements OnInit {

  reasonList = [
    { value: 'earth', viewValue: 'Earth' },
    { value: 'water', viewValue: 'Earth' },
    { value: 'fire', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
  ];

  medicationList = [
    { value: 'earth', viewValue: 'Earth' },
    { value: 'water', viewValue: 'Earth' },
    { value: 'fire', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
  ];

  treatmentActionList = [
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
  ];

  surgeryList = [
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
  ];

  sideEffectList = [
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
    { value: 'earth', viewValue: 'Earth' },
  ];

  constructor(
    protected _fb: FormBuilder,
    protected _api: TreatmentService,
    protected _store: TreatmentStoreService,
    private shipStats: ShipStatsService,
  ) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.createFormgroup();
  }

  createFormgroup() {
    this.formGroup = this._fb.group({
      date: [this.shipStats.getTime(), [Validators.required]],
      contact: [],
      treatingDoctor: [null, [Validators.required]],
      assistingDoctor: [],
      reasonOfVisit: [, Validators.required],

      locationOfTreatment: [],
      usedMedication: [],
      prescribedMedication: [],

      treatmentAction: [],
      treatmentActionNotes: [],

      surgery: [],
      surgeryNotes: [],
      possibleSideEffects: [],
    });
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();

    saveEntity.personID = this._store.getPersonID();
    saveEntity.treatmentID = UUID.UUID();
    this._api.upsertTreatment(saveEntity);
  }

  getPersonID() {
    const id = 'temp';
    return id;
  }

  log(thing) {
    console.log(thing);
  }
}
