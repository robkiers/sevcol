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
  ]

  medicalRecords;
  selectedEntry;
  displayedColumns = ['date', 'treatingDoctor', 'treatmentAction'];
  formGroup;

  patientFile;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() set patient(patient) {
    this.resetProperties();

    this.patientFile = patient;
    this._api.getMedicalRecordsList(patient).subscribe(data => {
      this.medicalRecords = new MatTableDataSource(data)
    });

  };

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    private _shipStats: ShipStatsService,
  ) { }

  ngOnInit() {
  }

  selectRow(row) {
    this.formGroup = null;
    this.selectedEntry = row;
  }

  applyFilter(filterValue: string) {
    this.medicalRecords.filter = filterValue.trim().toLowerCase();
  }

  createFormgroup(selectedEntry?: any) {
    this.selectedEntry = null;

    if (!!selectedEntry) {
      this.formGroup = this._fb.group({
        recordID: selectedEntry.id,
        personID: selectedEntry.personID,

        date: [selectedEntry.date, [Validators.required]],
        description: [selectedEntry.description],
        contact: [selectedEntry.contact],
        treatingDoctor: [selectedEntry.treatingDoctor, [Validators.required]],
        assistingDoctor: [selectedEntry.assistingDoctor],
        reasonOfVisit: [selectedEntry.reasonOfVisit, Validators.required],

        locationOfTreatment: [selectedEntry.locationOfTreatment],
        usedMedication: [selectedEntry.usedMedication],
        prescribedMedication: [selectedEntry.prescribedMedication],

        treatmentAction: [selectedEntry.treatmentAction],
        treatmentActionNotes: [selectedEntry.treatmentActionNotes],

        surgery: [selectedEntry.surgery],
        surgeryNotes: [selectedEntry.surgeryNotes],
        possibleSideEffects: [selectedEntry.possibleSideEffects],
      })
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
      })
      this.formGroup.markAllAsTouched();
    }
  };

  cancel() {
    this.formGroup = null;
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.upsertMedicalRecord(saveEntity);

    this.formGroup = null;
    this.selectedEntry = saveEntity;
  }

  resetProperties() {
    this.medicalRecords = null;
    this.selectedEntry = null;
    this.formGroup = null;
    this.patientFile = null;
  }

}