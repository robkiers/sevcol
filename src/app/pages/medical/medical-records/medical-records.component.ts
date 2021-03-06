import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { UUID } from 'angular2-uuid';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.scss']
})
export class MedicalRecordsComponent implements OnInit {

  screenSize = 'mobile';
  colsNumber = 3;

  doctorList = [
    { value: 'Porter', viewValue: 'Porter' },
    { value: 'Porter', viewValue: 'Porter' },
    { value: 'Wilde', viewValue: 'Wilde' },
  ];

  medicineList;

  formGroup;
  patientFile;

  @Input() selectedRecord;

  @Input() set patient(patient) {
    this.resetProperties();
    this.patientFile = patient;
  }

  @Output() cancelNew: EventEmitter<boolean> = new EventEmitter();

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseSharedService,
    private _shipStats: ShipStatsService,
  ) {
    this.screenSize = this._shipStats.screenSize;
    if (this._shipStats.screenSize === 'mobile') {
      this.colsNumber = 2;
    }
  }

  ngOnInit() {
    this._api.getDatabaseList().subscribe(entities => {
      this.medicineList = entities
        .filter(entry => {
          if (entry['category'] === 'medical' && entry['subCategory'] === 'medicine') {
            return entry;
          }
        })
        .map(entry => {
          const menuItem = {
            value: entry['title'],
            viewValue: entry['title']
          };
          return menuItem;
        });
    });
  }

  createFormgroup(selectedRecord?: any) {
    this.selectedRecord = selectedRecord;

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
    if (!this.selectedRecord) {
      this.cancelNew.emit(true);
    }
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.upsertMedicalRecord(saveEntity);

    // this.selectedRecord = saveEntity;
    // console.log(this.selectedRecord);
    this.formGroup = null;
  }

  resetProperties() {
    // this.medicalRecords = null;
    this.selectedRecord = null;
    this.formGroup = null;
    this.patientFile = null;
  }

}
