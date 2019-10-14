import { Component, OnInit, ViewChild } from '@angular/core';
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
    { definition: 'name', header: 'Name', width: '20%' },
    { definition: 'gender', header: 'Gender', width: '20%' },
    { definition: 'organisation', header: 'Organisation', width: '30%' },
    { definition: 'ship', header: 'Ship', width: '30%' }
  ];

  @ViewChild(PatientViewComponent, { static: true }) patientViewComponent: PatientViewComponent;

  @ViewChild(MedicalRecordsComponent, { static: true }) medicalRecordsComponent: MedicalRecordsComponent;

  recordList;
  selectedRecord;
  recordListColumns = [
    { definition: 'date', header: 'Date', width: '30%' },
    { definition: 'treatingDoctor', header: 'Treating Doctor', width: '30%' },
    { definition: 'treatmentAction', header: 'Reason', width: '40%' },
  ];

  constructor(
    protected _api: FirebaseService,
  ) { }

  ngOnInit() {
    this._api.getPatientList().subscribe(data => this.patientList = data);
  }

  rowSelect(patient) {
    this.selectedPatient = patient;
    this._api.getMedicalRecordsList(patient).subscribe(data => this.recordList = data);
  }

  recordRowSelect(record) {
    this.selectedRecord = record;
  }

  createMedicalRecord() {
    this.medicalRecordsComponent.createFormgroup();
  }

  createNewPatients() {
    this.patientViewComponent.createFormgroup();
  }
}
