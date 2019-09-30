import { Component, OnInit, ViewChild } from '@angular/core';
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

  dataSource;
  medicalRecords;
  selectedEntry;
  displayedColumns = ['title', 'category', 'shortDescription'];
  formGroup;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    private _shipStats: ShipStatsService,
  ) { }

  ngOnInit() {
    this._api.getDatabaseList().subscribe(data => this.medicalRecords = new MatTableDataSource(data));
    // this.databaseEntries = new MatTableDataSource(this.dataSource);
    this.medicalRecords.sort = this.sort;
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

        date: [selectedEntry.date, [Validators.required]],
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

        date: [this._shipStats.getTime(), [Validators.required]],
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
      })
      this.formGroup.markAllAsTouched()();
    }
  };

  cancel() {
    this.formGroup = null;
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.createDatabseEntry(saveEntity);

    this.formGroup = null;
    this.selectedEntry = saveEntity;
  }

}