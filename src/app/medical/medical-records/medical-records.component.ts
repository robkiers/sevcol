import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { MatTableDataSource } from '@angular/material/table';
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

  // medicalRecords;
  // selectedRecord;
  // displayedColumns = ['date', 'treatingDoctor', 'treatmentAction'];
  formGroup;

  patientFile;

  // @ViewChild(MatSort, { static: true }) sort: MatSort;


  @Input() selectedRecord;

  @Input() set patient(patient) {
    this.resetProperties();

    this.patientFile = patient;
    // this._api.getMedicalRecordsList(patient).subscribe(data => {
    //   this.medicalRecords = new MatTableDataSource(data)
    // });

  }

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    private _shipStats: ShipStatsService,
  ) { }

  ngOnInit() {
  }

  // selectRow(row) {
  //   this.formGroup = null;
  //   this.selectedRecord = row;
  // }

  // applyFilter(filterValue: string) {
  //   this.medicalRecords.filter = filterValue.trim().toLowerCase();
  // }

  createFormgroup(selectedRecord?: any) {
    this.selectedRecord = null;

    if (!!selectedRecord) {
      this.formGroup = this._fb.group({
        recordID: selectedRecord.id,
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
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.upsertMedicalRecord(saveEntity);

    this.formGroup = null;
    this.selectedRecord = saveEntity;
  }

  resetProperties() {
    // this.medicalRecords = null;
    this.selectedRecord = null;
    this.formGroup = null;
    this.patientFile = null;
  }

}