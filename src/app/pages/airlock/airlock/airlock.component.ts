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
import { FindPassengerComponent } from '../find-passenger/find-passenger.component';
import { TopBarService } from 'src/app/core/top-bar/top-bar.service';
import { LargeVideoPlayerComponent } from '../large-video-player/large-video-player.component';

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
  airlockPressurized = true;

  time;

  cameraRecord = true;

  // videoWidth = '600px';
  // videoHeight = '600px';

  // width = '600px';
  // height = '600px';

  @ViewChild('scanInput', { static: false }) scanInput: ElementRef;

  @ViewChild('videoElement', { static: true }) videoElement: any;
  video: any;

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
    public _dialog: MatDialog,
    public _topbar: TopBarService,
  ) {
    this._topbar.hide();
  }

  ngOnInit() {

    this._api.getCharacterList().subscribe(data => {
      this.characterList = data as CharacterBaseFile[];
    });

    this._api.getActiveCrewRoster().subscribe(data => {
      this.activeCrewList = data;
    });

    this._api.getActivePassengerList().subscribe(data => this.activePassengerList = data);

    this._shipStats.getAirlockStatus().subscribe(status => this.airlockOpen = status);
    this.time = this._shipStats.getTime();

    this.video = this.videoElement.nativeElement;
    this.initCamera({ video: true, audio: false });


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

  findPassenger() {
    const dialogRef = this._dialog.open(FindPassengerComponent, {
      width: '800px',
    });
    this.dialogClosed = false;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogClosed = true;
    });
  }

  unlistPassenger(event, person) {
    this._api.delistPassenger(person);
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

  toggleAirlock() {
    this._shipStats.toggle();
  }

  initCamera(config: any) {
    const browser = navigator as any;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.srcObject = stream;
      this.video.play();
    });
  }

  toggleCamera() {
    this.cameraRecord ? this.video.pause() : this.video.play();
    this.cameraRecord = !this.cameraRecord;
  }

  enlarge() {
    const dialogRef = this._dialog.open(LargeVideoPlayerComponent, {
      width: '800px',
      data: this.video.srcObject
    });
    this.dialogClosed = false;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogClosed = true;
    });
  }
}
