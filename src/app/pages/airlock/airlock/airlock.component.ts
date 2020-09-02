import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { MatDialog } from '@angular/material/dialog';
import { ActiveCrewListComponent } from '../active-crew-list/active-crew-list.component';
import { RegisterCharacterComponent } from '../register-character/register-character.component';
import { FindPassengerComponent } from '../find-passenger/find-passenger.component';
import { TopBarService } from 'src/app/core/top-bar/top-bar.service';
import { LargeVideoPlayerComponent } from '../large-video-player/large-video-player.component';
import { CharacterBaseFile, AirlockStatus } from 'src/app/shared/models';

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

  time;
  cameraRecord = true;
  showVideo = true;

  airlockStatus = {
    innerAirlockOpen: true,
    outerAirlockOpen: true,
    airlockPresure: true,
  };

  disablePresureButton = true;

  @ViewChild('scanInput') scanInput: ElementRef;

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
    protected _api: FirebaseSharedService,
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

    this.time = this._shipStats.getTime();

    this.video = this.videoElement.nativeElement;
    this.initCamera({ video: true, audio: false });

    this.setAirlockStatus();
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

  openDialog(): void {
    const dialogRef = this._dialog.open(ActiveCrewListComponent, {
      width: '800px',
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

  setAirlockStatus() {
    this._api.getAirlockStatus().subscribe(data => {
      this.airlockStatus = data as AirlockStatus;
      this.updateAllowPresurize();
    });
  }

  toggleAirlock() {
    if (this.airlockStatus.innerAirlockOpen && this.airlockStatus.outerAirlockOpen) {
      const status = {
        innerAirlockOpen: false,
        outerAirlockOpen: false,
        airlockPresure: false
      };
      this._api.toggleAirlock(status);
    } else {
      const status = {
        innerAirlockOpen: true,
        outerAirlockOpen: true,
        airlockPresure: true
      };
      this._api.toggleAirlock(status);
    }
    this.updateAllowPresurize();
  }

  toggleInnerAirlock() {
    if (this.airlockStatus.innerAirlockOpen) {
      const status = {
        innerAirlockOpen: false,
        outerAirlockOpen: this.airlockStatus.outerAirlockOpen,
        airlockPresure: this.airlockStatus.airlockPresure
      };
      this._api.toggleAirlock(status);
    } else {
      const status = {
        innerAirlockOpen: true,
        outerAirlockOpen: this.airlockStatus.outerAirlockOpen,
        airlockPresure: this.airlockStatus.airlockPresure
      };
      this._api.toggleAirlock(status);
    }
    this.updateAllowPresurize();
  }

  toggleOuterAirlock() {
    if (this.airlockStatus.outerAirlockOpen) {
      const status = {
        innerAirlockOpen: this.airlockStatus.innerAirlockOpen,
        outerAirlockOpen: false,
        airlockPresure: this.airlockStatus.airlockPresure
      };
      this._api.toggleAirlock(status);
    } else {
      const status = {
        innerAirlockOpen: this.airlockStatus.innerAirlockOpen,
        outerAirlockOpen: true,
        airlockPresure: this.airlockStatus.airlockPresure
      };
      this._api.toggleAirlock(status);
    }
    this.updateAllowPresurize();
  }

  togglePresureAirlock() {
    if (this.airlockStatus.airlockPresure) {
      const status = {
        innerAirlockOpen: this.airlockStatus.innerAirlockOpen,
        outerAirlockOpen: this.airlockStatus.outerAirlockOpen,
        airlockPresure: false
      };
      this._api.toggleAirlock(status);
    } else {
      const status = {
        innerAirlockOpen: this.airlockStatus.innerAirlockOpen,
        outerAirlockOpen: this.airlockStatus.outerAirlockOpen,
        airlockPresure: true
      };
      this._api.toggleAirlock(status);
    }
    this.updateAllowPresurize();
  }

  updateAllowPresurize() {
    if (!this.airlockStatus.innerAirlockOpen && !this.airlockStatus.outerAirlockOpen) {
      this.disablePresureButton = false;
    } else {
      this.disablePresureButton = true;
    }
  }

  initCamera(config: any) {

    const browser = navigator as any;

    browser.getUserMedia = (
      browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia
    );

    browser.mediaDevices.getUserMedia(config).then(
      () => stream => {
        console.log('recording device found');

        this.showVideo = true;
        this.video.srcObject = stream;
        this.video.play();
      },
      () => {
        this.showVideo = false;
        console.log('No recording device found');
      }
    );
  }

  toggleCamera() {
    this.cameraRecord ? this.video.pause() : this.video.play();
    this.cameraRecord = !this.cameraRecord;
  }

  enlarge() {
    if (this.showVideo) {
      const dialogRef = this._dialog.open(LargeVideoPlayerComponent, {
        width: '690px',
        data: this.video.srcObject
      });
      this.dialogClosed = false;

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.dialogClosed = true;
      });
    }
  }
}
