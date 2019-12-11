import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { PatientViewComponent } from '../patient-view/patient-view.component';
import { MedicalRecordsComponent } from '../../medical-records/medical-records.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {

  SCOPE = 'ContainerComponent';

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
  ) { }

  ngOnInit() {
    this._api.getPatientList().subscribe(data => this.patientList = data);
  }

  rowSelect(patient) {
    this.setPatientStep(1);
    this.selectedPatient = patient;
    this._api.getMedicalRecordsList(patient).subscribe(data => this.recordList = data);
  }

  recordRowSelect(record) {
    this.setRecordStep(1);
    this.selectedRecord = record;
  }

  createMedicalRecord() {
    this.setRecordStep(1);
    this.changeDetectorRef.detectChanges();
    this.medicalRecordsComponent.createFormgroup();
  }

  createNewPatients() {
    this.setPatientStep(1);
    this.changeDetectorRef.detectChanges();
    this.patientViewComponent.createFormgroup();
  }

  determineCols() {
    const innerWidth = window.innerWidth;
    // console.log(innerWidth);
    if (innerWidth < 500) {
      return '1';
    }
    return '2';
  }

  closePatient() {
    this.setPatientStep(0);
    this.selectedPatient = null;
    this.selectedRecord = null;
  }

  closeRecord() {
    this.setRecordStep(0);
    this.selectedRecord = null;
  }

  setPatientStep(i) {
    this.patientView = i;
  }

  setRecordStep(i) {
    this.recordView = i;
  }
}
