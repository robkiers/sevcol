import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { map, tap, filter } from 'rxjs/operators';
import { CharacterBaseFile, CharacterPatientFile } from 'src/app/core/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ActiveCrewListComponent, CharcterActivity } from '../active-crew-list/active-crew-list.component';
import { RegisterCharacterComponent } from '../register-character/register-character.component';

@Component({
  selector: 'app-airlock',
  templateUrl: './airlock.component.html',
  styleUrls: ['./airlock.component.scss']
})
export class AirlockComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name', 'disembarked'];
  displayedPassengerColumns: string[] = ['position', 'image', 'name', 'disembarked'];

  characterList: CharacterBaseFile[];

  crewList;
  activeCrewList;
  passengerList;
  activePassengerList;
  knownPassengerList;

  dialogClosed = true;

  manualOveride = false;
  airlockOpen = false;
  innerAirlock = false;
  outerAirlock = false;

  @ViewChild('scanInput', { static: false }) scanInput: ElementRef;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.dialogClosed) {
      this.scanInput.nativeElement.focus();
    }
  }

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    private _snackBar: MatSnackBar,
    private _shipStats: ShipStatsService,
    public _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._api.getCharacterList().subscribe(data => {
      this.characterList = data as CharacterBaseFile[];
      console.log('airlock data', data);
    });

    this._api.getActiveCrewRoster().subscribe(data => {
      this.activeCrewList = data;
      console.log('airlock data', data);
    });

    this._api.getActivePassengerList().subscribe(data => this.activePassengerList = data);
  }

  selectRow(e) {
    e.disembarked = !e.disembarked;
    this._api.createCharacter(e);
  }

  update(event) {
    const updateEvent = this.characterList.find(entry => entry.cardNumber === event);
    this.selectRow(updateEvent);
    this.scanInput.nativeElement.value = '';
  }

  unlistPassenger(event) {
    console.log(event);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(ActiveCrewListComponent, {
      width: '800px',
      // data: { name: this.name, animal: this.animal }
    });
    this.dialogClosed = false;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogClosed = true;
    });
  }

  openRegisterDialog(character: string): void {
    const dialogRef = this._dialog.open(RegisterCharacterComponent, {
      width: '800px',
      data: { character }
    });
    this.dialogClosed = false;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogClosed = true;
    });
  }

}
