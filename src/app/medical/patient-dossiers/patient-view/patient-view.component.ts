import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  // patientList;
  // selectedEntry;
  // displayedColumns = ['name', 'gender', 'organisation', 'ship'];
  formGroup;

  @Input() selectedEntry;

  // set dataSource(dataSource) {
  //   this.data = dataSource;
  //   // console.log(dataSource)
  // }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
  ) { }

  ngOnInit() {
    // this._api.getPatientList().subscribe(data => this.patientList = new MatTableDataSource(data));
  }

  selectRow(row) {
    this.formGroup = null;
    this.selectedEntry = row;
  }

  // applyFilter(filterValue: string) {
  //   this.patientList.filter = filterValue.trim().toLowerCase();
  // }

  createFormgroup(selectedEntry?: any) {
    this.selectedEntry = null;

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
  }

  save() {
    const saveEntity = this.formGroup.getRawValue();
    this._api.createDatabseEntry(saveEntity);

    this.formGroup = null;
    this.selectedEntry = saveEntity;
  }

}
