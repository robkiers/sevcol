import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

  patients;

  displayedColumns = ['name', 'gender', 'organisation', 'ship'];

  constructor(
    // private _router: Router,
  ) { }

  ngOnInit() {
    this.patients = [
      {
        name: 'Simeon',
        familyName: 'Wilde',
        origigin: 'Lucis',
        organisation: 'Sevcol',
        ship: 'Celestra',
        gender: 'Male',
        patientID: '6cd985f2-7178-422b-a7c4-d8cc4fb34ab3',
        specialAttention: 'false',
        bloodGroup: 'AB',
        NPC: 'false',
      },
      {
        name: 'Alma',
        familyName: 'Chadez',
        origigin: 'Mars',
        organisation: 'Cartel',
        ship: 'Celestra',
        gender: 'Female',
        patientID: '3c8f2d75-5f56-44fa-848a-3515ae776a4e',
        specialAttention: 'false',
        bloodGroup: 'AB',
        NPC: 'false',
      }
    ];
  }

  navigateTo(row) {

    console.log(row);
    // this._router.navigate(['/processes', row]);
  }

  entitySelected(entity) {

  }

}
