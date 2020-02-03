import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { UUID } from 'angular2-uuid';
import { GenerateQRService } from 'src/app/shared/base-class/generate-qr/generate-qr.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

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
    { value: 'void', viewValue: 'Void Borne' }
  ];

  screenSize = 'mobile';
  colsNumber = 2;
  formGroup: FormGroup;
  selected;

  @Input() set selectedEntry(patient) {
    this.formGroup = null;
    this.selected = patient;
  }

  @Output() cancelNew: EventEmitter<boolean> = new EventEmitter();


  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    protected _qrService: GenerateQRService,
    protected _shipstats: ShipStatsService,
  ) {
    this.screenSize = this._shipstats.screenSize;
    if (this._shipstats.screenSize === 'mobile') {
      this.colsNumber = 2;
    }
  }

  ngOnInit() {
  }

  createFormgroup(selectedEntry?: any) {
    this.selected = selectedEntry;

    if (!!selectedEntry) {
      this.formGroup = this._fb.group({
        name: [selectedEntry.name, [Validators.required, Validators.maxLength(200)]],
        otherNames: [selectedEntry.otherNames, [Validators.maxLength(200)]],
        familyName: [selectedEntry.familyName, [Validators.required, Validators.maxLength(200)]],

        gender: [selectedEntry.gender, [Validators.required, Validators.maxLength(200)]],
        height: [selectedEntry.height],
        weight: [selectedEntry.weight],

        origin: [selectedEntry.origin],
        dateOfBirth: [selectedEntry.dateOfBirth],
        bloodType: [selectedEntry.bloodType],
        allele: [selectedEntry.allele],

        organisation: [selectedEntry.organisation],
        ship: [selectedEntry.ship, [Validators.maxLength(200)]],

        specialAttention: [selectedEntry.specialAttention, [Validators.required, Validators.maxLength(200)]],
        specialAttentionDescription: [selectedEntry.specialAttentionDescription],

        notes: [selectedEntry.notes],

        npc: [selectedEntry.npc],
        personID: [selectedEntry.personID],
      });

    } else {
      this.formGroup = this._fb.group({

        name: [null, [Validators.required, Validators.maxLength(200)]],
        otherNames: [null, [Validators.maxLength(200)]],
        familyName: [null, [Validators.required, Validators.maxLength(200)]],

        gender: [null, [Validators.required, Validators.maxLength(200)]],
        height: [null],
        weight: [null],

        origin: [null],
        dateOfBirth: [],
        bloodType: [],
        allele: [],

        organisation: [null],
        ship: [null, [Validators.maxLength(200)]],

        specialAttention: [false, [Validators.required, Validators.maxLength(200)]],
        specialAttentionDescription: [],

        notes: [],

        npc: [false],
        personID: UUID.UUID(),
      });
      this.formGroup.markAllAsTouched();
    }
  }

  cancel() {
    this.formGroup = null;

    if (!this.selected) {
      this.cancelNew.emit(true);
    }
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.createPatient(saveEntity);

    this.formGroup = null;
    this.selected = saveEntity;
  }

  createQR() {
    const qrCode = {
      title: this.selected.familyName + this.selected.name,
      data: this.selected.personID,
      type: 'person',
    };
    this._qrService.createQR(qrCode);
  }


}

export interface CharacterPatientFile {
  personID: string;
  name: string;
  otherNames: string;
  familyName: string;
  gender: string;
  height: string;
  weight: string;
  planetOfOrigin: string;
  npc: boolean;

  organisation: string;
  ship: string;

  bloodType: string;
  allele: string;
  specialAttention: boolean;
  specialAttentionDescription: string;
  notes: string;
}
