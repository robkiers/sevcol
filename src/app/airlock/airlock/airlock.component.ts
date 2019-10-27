import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airlock',
  templateUrl: './airlock.component.html',
  styleUrls: ['./airlock.component.scss']
})
export class AirlockComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name'];

  personList = [
    { image: 'testimage', name: 'testname', onboard: true },
    { image: 'testimage1', name: 'testname2', onboard: true },
  ]

  crewList;
  activeCrewList;
  passengerList;
  knownPassengerList;

  constructor() { }

  ngOnInit() {
  }

  selectRow(e) {
    console.log(e);
  }
}
