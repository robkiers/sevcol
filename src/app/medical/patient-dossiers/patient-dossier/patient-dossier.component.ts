import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-dossier',
  templateUrl: './patient-dossier.component.html',
  styleUrls: ['./patient-dossier.component.scss']
})

export class PatientDossierComponent implements OnInit {

  @Input() patient: any;

  constructor() { }

  ngOnInit() {

    console.log('input', this.patient);
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