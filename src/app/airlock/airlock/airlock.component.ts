import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { map, tap } from 'rxjs/operators';
import { CharacterBaseFile, CharacterPatientFile } from 'src/app/core/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-airlock',
  templateUrl: './airlock.component.html',
  styleUrls: ['./airlock.component.scss']
})
export class AirlockComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name', 'aboardCelestra'];

  characterList: CharacterBaseFile[];

  crewList;
  activeCrewList;
  passengerList;
  knownPassengerList;

  manualOveride = false;
  airlockOpen = false;
  innerAirlock = false;
  outerAirlock = false;

  @ViewChild('scanInput', { static: false }) scanInput: ElementRef;

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    this.scanInput.nativeElement.focus();
  }

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    private _snackBar: MatSnackBar,
    private _shipStats: ShipStatsService,
  ) { }

  ngOnInit() {
    this._api.getCharacterList().subscribe(data => {
      this.characterList = data as CharacterBaseFile[];
      console.log('airlock data', data);
    });
  }

  selectRow(e) {
    e.aboardCelestra = !e.aboardCelestra;
    this._api.createCharacter(e);
  }

  update(event) {
    const updateEvent = this.characterList.find(entry => entry.cardNumber === event);
    this.selectRow(updateEvent);
    this.scanInput.nativeElement.value = '';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  verifyList() {
    this._api.getPatientList().pipe(
      tap(data => console.log(data)),
      map(data => {
        data.map(entry => {
          const castEntry = entry as CharacterPatientFile;
          const newCharacter: CharacterBaseFile = {
            personID: castEntry.personID,
            name: castEntry.name,
            otherNames: !!castEntry.otherNames ? castEntry.otherNames : null,
            familyName: castEntry.familyName,
            gender: castEntry.gender,
            height: !!castEntry.height ? castEntry.height : null,
            weight: !!castEntry.weight ? castEntry.weight : null,
            planetOfOrigin: !!castEntry.planetOfOrigin ? castEntry.planetOfOrigin : null,
            dateOfBirth: !!castEntry.dateOfBirth ? castEntry.dateOfBirth : null,
            // imageLocation: castEntry.imageLocation,
            organisation: !!castEntry.organisation ? castEntry.organisation : null,
            ship: !!castEntry.ship ? castEntry.ship : null,
            aboardCelestra: true,
            onDuty: true,
            isAlive: true,
          };
          this._api.createCharacter(newCharacter);
        });
      })
    ).subscribe(result => console.log(result));
  }
}

// 0001818362
// 0002181010