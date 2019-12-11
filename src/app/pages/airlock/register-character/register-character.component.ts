import { Component, OnInit, Output, EventEmitter, Inject, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { UUID } from 'angular2-uuid';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActiveCrewListComponent, CharcterActivity } from '../active-crew-list/active-crew-list.component';
import { CharacterBaseFile, CharacterPatientFile } from 'src/app/core/models';

@Component({
  selector: 'app-register-character',
  templateUrl: './register-character.component.html',
  styleUrls: ['./register-character.component.scss']
})
export class RegisterCharacterComponent implements OnInit {

  originLookup = [
    { value: 'earth', viewValue: 'Earth' },
    { value: 'luna', viewValue: 'Luna' },
    { value: 'mars', viewValue: 'Mars' },
    { value: 'jupiter', viewValue: 'United Moons of Jupiter' },
    { value: 'saturn', viewValue: 'Saturn Collective' },
    { value: 'eden', viewValue: 'Eden' },
    { value: 'kordoss', viewValue: 'Kordoss' },
    { value: 'lux', viewValue: 'Lux' },
    { value: 'lucis', viewValue: 'Lucis' },
    { value: 'voidborne', viewValue: 'Void Borne' }
  ];

  certificateLookup = [
    {
      name: 'Engineering',
      certificates: [
        { value: 'shipboardSystems', viewValue: 'Shipboard systems' },
        { value: 'shipboardDefences;', viewValue: 'Shipboard defences' },
        { value: 'personalWeapons', viewValue: 'Personal weapons' },
        { value: 'remoteOperatedVehicles', viewValue: 'Remote Operated Vehicles' },
        { value: 'smallCraft;', viewValue: 'Small craft' },
      ]
    },
    {
      name: 'Medical',
      certificates: [
        { value: 'EMT', viewValue: 'EMT' },
        { value: 'surgery', viewValue: 'Surgery' },
        { value: 'internalMedicine', viewValue: 'Internal medicine' },
        { value: 'mentalHealth', viewValue: 'Mental Health' },
        { value: 'immunologyDiseases', viewValue: 'Immunology/Diseases' },
      ]
    },
    {
      name: 'Science',
      certificates: [
        { value: 'chemistryBiology', viewValue: 'Chemistry and Biology' },
        { value: 'planetaryScience', viewValue: 'Planetary science' },
        { value: 'physicsGraviticsJumpgates', viewValue: 'Physics, Gravitics and Jump gates' },
        { value: 'computerTechnologyProgramming', viewValue: 'Computer Technology/Programming' },
        { value: 'communications', viewValue: 'Communications specialist' },
      ]
    },
    {
      name: 'Security',
      certificates: [
        { value: 'mediumWeapons', viewValue: 'Medium Weapons' },
        { value: 'heavyWeapons', viewValue: 'Heavy Weapons' },
        { value: 'Rival', viewValue: 'Rival Weapons' },
        { value: 'explosives', viewValue: 'Explosives' },
        { value: 'investigation', viewValue: 'Investigation' },
      ]
    },
    {
      name: 'Civilian',
      certificates: [
        { value: 'wealthy', viewValue: 'Wealthy' },
        { value: 'veryWealthy', viewValue: 'Very Wealthy' },
        { value: 'merchant', viewValue: 'Merchant' },
        { value: 'contacts', viewValue: 'Contacts' },
        { value: 'dignitary', viewValue: 'Dignitary' },
        { value: 'politician', viewValue: 'Politician' },
      ]
    }
  ];

  formGroup: FormGroup;
  cardNumber = '';
  cardRegistrationView = false;
  cardRegistrationPending = false;
  temp;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.cardRegistrationView) {
      if (event.keyCode > 47 && event.keyCode < 57) {
        this.cardNumber = this.cardNumber + event.key;
      } else if (event.key === 'Enter') {
        this.formGroup.get('cardNumber').setValue(event.key);
        this.cardNumber = '';
        this.cardRegistrationPending = true;
        setTimeout(_ => {
          this.resetView();
        }, 2000);
      }
    }
  }

  constructor(
    public dialogRef: MatDialogRef<ActiveCrewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
  ) { }

  resetView() {
    console.log('Enter b', this.cardRegistrationView);
    this.cardRegistrationView = false;
    this.cardRegistrationPending = false;
    this.cardNumber = '';
    // return false;
  }

  ngOnInit() {
    // console.log(this.data);
    this.createFormgroup();

    this._api.getCharacterList().subscribe(data => this.temp = data);
  }

  determineCols() {
    const innerWidth = window.innerWidth;
    console.log(innerWidth);
    if (innerWidth < 500) {
      return '2';
    }
    return '3';
  }

  createFormgroup() {
    this.formGroup = this._fb.group({

      name: [null, [Validators.required, Validators.maxLength(200)]],
      otherNames: [null, [Validators.maxLength(200)]],
      familyName: [null, [Validators.required, Validators.maxLength(200)]],

      gender: [null, [Validators.required, Validators.maxLength(200)]],
      weight: [null],
      height: [null],

      planetOfOrigin: [null],
      dateOfBirth: [],

      imageLocation: [],
      cardNumber: [],
      npc: [false],
      personID: UUID.UUID(),

      organisation: [null],
      ship: [this.data.character === 'crew' ? 'Celestra' : null],
      certificates: [],

      disembarked: true,
      active: true,
      alive: true,
    });
    this.formGroup.markAllAsTouched();
  }

  cancel() {
    this.formGroup = null;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    const saveEntity: CharacterBaseFile = this.formGroup.getRawValue();

    const characterActivity: CharcterActivity = {
      personID: saveEntity.personID,
      cardNumber: saveEntity.cardNumber,
      name: saveEntity.name,
      familyName: saveEntity.familyName,
      imageLocation: saveEntity.imageLocation,
      active: saveEntity.active,
      disembarked: saveEntity.disembarked,
      alive: saveEntity.alive,
    };

    const patientFile: CharacterPatientFile = {
      name: saveEntity.name,
      otherNames: saveEntity.otherNames,
      familyName: saveEntity.familyName,

      personID: saveEntity.personID,
      imageLocation: saveEntity.imageLocation,
      alive: true,

      gender: saveEntity.gender,
      height: saveEntity.height,
      weight: saveEntity.weight,
      planetOfOrigin: saveEntity.planetOfOrigin,
      npc: saveEntity.npc,

      organisation: saveEntity.organisation,
      ship: saveEntity.ship,
      specialAttention: false,
    };
    console.log(this.formGroup);
    // if (this.data.character === 'crew') {
    //   this._api.registerCharacter(saveEntity, characterActivity, patientFile);
    // } else if (this.data.character === 'passenger') {
    //   this._api.registerPassenger(saveEntity, characterActivity, patientFile);
    // }
    this.formGroup = null;
    this.closeDialog();

  }

  toggleRegisterCardView() {
    this.cardRegistrationView = !this.cardRegistrationView;
  }

  // (keyup.enter)="update(scanInput.value)"
  update(value) {
    console.log('card', this.formGroup.get('cardNumber'));

  }

  verifyList() {
    console.log(this.temp);
    this.temp.forEach(element => {
      console.log(element);
      const saveEntity = element;

      saveEntity.npc = null;
      saveEntity.cardNumber = null;

      const characterBase: CharacterBaseFile = {
        personID: saveEntity.personID,
        cardNumber: saveEntity.cardNumber,
        name: saveEntity.name,
        familyName: saveEntity.familyName,
        imageLocation: null,
        active: saveEntity.onDuty,
        disembarked: !saveEntity.aboardCelestra,
        alive: saveEntity.isAlive,
        otherNames: saveEntity.otherNames,

        gender: saveEntity.gender,
        height: saveEntity.height,
        weight: saveEntity.weight,
        planetOfOrigin: saveEntity.planetOfOrigin,
        npc: saveEntity.npc,
        dateOfBirth: saveEntity.dateOfBirth,

        organisation: saveEntity.organisation,
        ship: saveEntity.ship
      };

      const characterActivity: CharcterActivity = {
        personID: saveEntity.personID,
        cardNumber: saveEntity.cardNumber,
        name: saveEntity.name,
        familyName: saveEntity.familyName,
        imageLocation: null,
        active: saveEntity.onDuty,
        disembarked: !saveEntity.aboardCelestra,
        alive: saveEntity.isAlive,
      };

      const patientFile: CharacterPatientFile = {
        name: saveEntity.name,
        otherNames: saveEntity.otherNames,
        familyName: saveEntity.familyName,

        personID: saveEntity.personID,
        imageLocation: null,
        alive: saveEntity.isAlive,

        gender: saveEntity.gender,
        height: saveEntity.height,
        weight: saveEntity.weight,
        planetOfOrigin: saveEntity.planetOfOrigin,
        dateOfBirth: saveEntity.dateOfBirth,
        npc: saveEntity.npc,

        organisation: saveEntity.organisation,
        ship: saveEntity.ship,
        specialAttention: false,
      };
      console.log(this.formGroup);
      // if (this.data.character === 'crew') {
      //   this._api.registerCharacter(characterBase, characterActivity, patientFile);
      // } else if (this.data.character === 'passenger') {
      //   this._api.registerPassenger(characterBase, characterActivity, patientFile);
      // }
      // this.formGroup = null;
      // this.closeDialog();
    });
  }

}
