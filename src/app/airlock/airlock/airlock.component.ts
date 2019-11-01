import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-airlock',
  templateUrl: './airlock.component.html',
  styleUrls: ['./airlock.component.scss']
})
export class AirlockComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name'];

  characterList;
  //  = [
  //   { image: 'testimage', name: 'testname', onboard: true },
  //   { image: 'testimage1', name: 'testname2', onboard: true },
  // ];

  crewList;
  activeCrewList;
  passengerList;
  knownPassengerList;

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    private _shipStats: ShipStatsService,
  ) { }

  ngOnInit() {
    this._api.getCharacterList().subscribe(data => {
      this.characterList = data;
      console.log('airlock data', data);
    });
  }

  selectRow(e) {
    console.log(e);
  }

  verifyList() {
    console.log();

    // this._api.getCharacterList().subscribe(data => {

    // return this._lookups.get(LOOKUPS.EVENT_AGGREGRATIONS).pipe(
    //   map(entities => {
    //     return entities.map(entity => {
    this._api.getPatientList().pipe(
      tap(data => console.log(data)),
      map(data => {
        return data.map(<Character>entry => {
          const newCharacter: Character = {
            personID: entry.personID,
            name: entry.name,
          };
          this._api.createCharacter(entry['personID']);
        });
        // data.personID)
      })
    );
  }
}

export interface Character {
  personID: string;
  name: string;
  otherNames?: string;
  familyName: string;
  gender: string;
  height?: number;
  weight?: number;
  planetOfOrigin?: string;
  dateOfBirth?: Date;
  imageLocation?: string;


  // certificates: string[];
  organisation?: string;
  ship?: string;


  aboardCelestra: boolean;
  onDuty: boolean;
  isAlive: boolean;
}
