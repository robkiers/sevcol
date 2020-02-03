import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { PatientViewComponent } from '../patient-view/patient-view.component';
import { MedicalRecordsComponent } from '../../medical-records/medical-records.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {

  SCOPE = 'ContainerComponent';

  screenSize = 'mobile';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  selectedIndex = 1;

  patientList;
  selectedPatient;
  patientListColumns = [
    { definition: 'familyName', header: 'Name', width: '20%' },
    { definition: 'name', header: 'First Name', width: '20%' },
    // { definition: 'gender', header: 'Gender', width: '20%' },
    { definition: 'organisation', header: 'Organisation', width: '30%' },
    { definition: 'ship', header: 'Ship', width: '30%' }
  ];

  @ViewChild(PatientViewComponent, { static: false }) patientViewComponent: PatientViewComponent;

  @ViewChild(MedicalRecordsComponent, { static: false }) medicalRecordsComponent: MedicalRecordsComponent;

  recordList;
  selectedRecord;
  recordListColumns = [
    { definition: 'date', header: 'Date', width: '30%' },
    { definition: 'treatingDoctor', header: 'Treating Doctor', width: '30%' },
    { definition: 'treatmentAction', header: 'Reason', width: '40%' },
  ];

  patientView = 0;
  recordView = 0;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    protected _api: FirebaseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this._api.getPatientList().subscribe(data => this.patientList = data);
  }

  rowSelect(patient) {
    this.selectedIndex = 2;
    this.selectedPatient = patient;
    this._api.getMedicalRecordsList(patient).subscribe(data => this.recordList = data);
  }

  recordRowSelect(record) {
    this.selectedIndex = 4;
    this.selectedRecord = record;
  }

  createMedicalRecord() {
    this.selectedIndex = 4;
    this.changeDetectorRef.detectChanges();
    this.medicalRecordsComponent.createFormgroup();
  }

  createNewPatients() {
    this.selectedIndex = 2;
    this.changeDetectorRef.detectChanges();
    this.patientViewComponent.createFormgroup();
  }

  setSelectedIndex(index) {
    this.selectedIndex = index;
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (action === this.SWIPE_ACTION.RIGHT) {
      if (this.selectedIndex !== 0) {
        this.selectedIndex = this.selectedIndex - 1;
      }
    }
    if (action === this.SWIPE_ACTION.LEFT) {
      if (this.selectedIndex === 1 && !!this.selectedPatient) {
        this.selectedIndex = this.selectedIndex + 1;
      } else if (this.selectedIndex === 2 && !!this.selectedPatient) {
        this.selectedIndex = this.selectedIndex + 1;
      } else if (this.selectedIndex === 3 && !!this.selectedRecord) {
        this.selectedIndex = this.selectedIndex + 1;
      } else if (this.selectedIndex === 0) {
        this.selectedIndex = this.selectedIndex + 1;
      }
    }
  }
}
