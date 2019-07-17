import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/services/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { TreatmentService } from 'src/app/shared/services/treatment.service';
import { TreatmentStoreService } from '../treatment.service';

@Component({
  selector: 'app-new-treatment',
  templateUrl: './new-treatment.component.html',
  styleUrls: ['./new-treatment.component.scss']
})
export class NewTreatmentComponent implements OnInit {

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
    });
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    
    saveEntity.personID = this._store.getPersonID();
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
