import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { UUID } from 'angular2-uuid';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.scss']
})
export class MedicalRecordsComponent implements OnInit {

  doctorList = [
    { value: 'Porter', viewValue: 'Porter' },
    { value: 'Porter', viewValue: 'Porter' },
    { value: 'Wilde', viewValue: 'Wilde' },
  ];

  medicineList = [
    { value: 'Pencilin', viewValue: 'Pencilin' },
  ];

  formGroup;
  patientFile;

  @Input() selectedRecord;

  @Input() set patient(patient) {
    this.resetProperties();
    this.patientFile = patient;
  }

  @Output() close = new EventEmitter();

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    private _shipStats: ShipStatsService,
  ) { }

  ngOnInit() {
  }

  createFormgroup(selectedRecord?: any) {
    this.selectedRecord = null;

    if (!!selectedRecord) {
      this.formGroup = this._fb.group({
        recordID: selectedRecord.recordID,
        personID: selectedRecord.personID,

        date: [selectedRecord.date, [Validators.required]],
        description: [selectedRecord.description],
        contact: [selectedRecord.contact],
        treatingDoctor: [selectedRecord.treatingDoctor, [Validators.required]],
        assistingDoctor: [selectedRecord.assistingDoctor],
        reasonOfVisit: [selectedRecord.reasonOfVisit, Validators.required],

        locationOfTreatment: [selectedRecord.locationOfTreatment],
        usedMedication: [selectedRecord.usedMedication],
        prescribedMedication: [selectedRecord.prescribedMedication],

        treatmentAction: [selectedRecord.treatmentAction],
        treatmentActionNotes: [selectedRecord.treatmentActionNotes],

        surgery: [selectedRecord.surgery],
        surgeryNotes: [selectedRecord.surgeryNotes],
        possibleSideEffects: [selectedRecord.possibleSideEffects],
      });
    } else {
      this.formGroup = this._fb.group({
        recordID: UUID.UUID(),
        personID: this.patientFile.personID,

        date: [this._shipStats.getTime(), [Validators.required]],
        contact: [],
        description: [],
        treatingDoctor: [null, [Validators.required]],
        assistingDoctor: [],
        reasonOfVisit: [, Validators.required],

        locationOfTreatment: [],
        usedMedication: [],
        prescribedMedication: [],

        treatmentAction: [null, [Validators.required]],
        treatmentActionNotes: [],

        surgery: [],
        surgeryNotes: [],
        possibleSideEffects: [],
      });
      this.formGroup.markAllAsTouched();
    }
  }

  cancel() {
    this.formGroup = null;
    this.closePanel();
  }

  closePanel() {
    this.close.emit(true);
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.upsertMedicalRecord(saveEntity);

    // this.selectedRecord = saveEntity;
    // console.log(this.selectedRecord);
    this.formGroup = null;
    this.closePanel();

  }

  resetProperties() {
    // this.medicalRecords = null;
    this.selectedRecord = null;
    this.formGroup = null;
    this.patientFile = null;
  }

  determineCols() {
    const innerWidth = window.innerWidth;
    // console.log(innerWidth);
    if (innerWidth < 500) {
      return '1';
    }
    return '2';
  }
}