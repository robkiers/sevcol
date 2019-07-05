import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PatientService } from 'src/app/shared/services/patient.service';
import { PATIENT } from 'src/app/core/models';

@Component({
  selector: 'app-patient-dossier',
  templateUrl: './patient-dossier.component.html',
  styleUrls: ['./patient-dossier.component.scss']
})

export class PatientDossierComponent implements OnInit {

  @Input() patient$: any;

  constructor(
    protected _api: PatientService,
  ) {

  }

  ngOnInit() {
    console.log('input', this.patient$);
  }

  delete(patient: PATIENT) {
    this._api.deletePatient(patient);
  }
}

// name: 'Simeon',
// familyName: 'Wilde',
// origin: 'Lucis',
// organisation: 'Sevcol',
// ship: 'Celestra',
// gender: 'Male',
// patientID: '6cd985f2-7178-422b-a7c4-d8cc4fb34ab3',
// specialAttention: 'false',
// NPC: 'false',