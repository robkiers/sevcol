import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UUID } from 'angular2-uuid';

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
    { value: 'lucis', viewValue: 'Lucis' }
  ];

  formGroup: FormGroup;
  selected;

  @Input() set selectedEntry(patient) {
    this.formGroup = null;
    this.selected = patient;
  };

  @Output() close = new EventEmitter();

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
  ) { }

  ngOnInit() {
  }

  createFormgroup(selectedEntry?: any) {
    this.selected = null;

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
    this.close.emit(true);
  }

  closePanel() {
    this.close.emit(true);
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.createPatient(saveEntity);

    this.formGroup = null;
    this.selected = saveEntity;
  }

  determineCols() {
    const innerWidth = window.innerWidth;
    // console.log(innerWidth);
    if (innerWidth < 500) {
      return '1';
    }
    return '2';
  }

}
