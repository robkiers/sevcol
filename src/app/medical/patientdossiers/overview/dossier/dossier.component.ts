import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.scss']
})

export class DossierComponent implements OnInit {

  @Input()
  patient: any;

  constructor() { }

  ngOnInit() {
  }

}

// name: 'Simeon',
// familyName: 'Wilde',
// origigin: 'Lucis',
// organisation: 'Sevcol',
// ship: 'Celestra',
// gender: 'Male',
// patientID: '6cd985f2-7178-422b-a7c4-d8cc4fb34ab3',
// specialAttention: 'false',
// NPC: 'false',