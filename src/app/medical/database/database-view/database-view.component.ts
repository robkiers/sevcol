import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-database-view',
  templateUrl: './database-view.component.html',
  styleUrls: ['./database-view.component.scss']
})
export class DatabaseViewComponent implements OnInit {

  // dataSource = [
  //   {
  //     title: 'Paracetamol',
  //     id: '01',
  //     category: 'Medical',
  //     subCategory: 'Medicine',
  //     shortDescription: 'Relatively safe if somewhat weak, painkiller',
  //     description: 'Relatively safe if somewhat weak, painkiller. Also helps with fevers. Starts working in roughly half an hour. If used in a high dosage for several weeks, there is a chance of damage to liver, kidneys and/or blood. Do not generally use in conjunction with another painkiller, unless prescribed.',
  //     measurement: 'kilogram',
  //     onboard: '110',
  //   }
  // ];

  categoryList = [
    { value: 'medical', viewValue: 'Medical' },
    { value: 'science', viewValue: 'Science' },
    { value: 'engineering', viewValue: 'Engineering' },
  ];

  subCategoryList = [
    { value: 'medicine', viewValue: 'Medicine' },
    { value: 'protocols', viewValue: 'Protocols' },
    { value: 'treatments', viewValue: 'Treatments' },
    { value: 'injuries', viewValue: 'Injuries' },
  ];

  measurementList = [
    { value: 'seconds', viewValue: 'Seconds' },
    { value: 'metre', viewValue: 'Metre' },
    { value: 'kilogram', viewValue: 'Kilogram' },
    { value: 'ampere', viewValue: 'Ampere' },
    // { value: 'kelvin', viewValue: 'Kelvin' },
    // { value: 'mole', viewValue: 'Mole' },
    // { value: 'candela', viewValue: 'Candela' },
  ];

  // databaseEntries = new MatTableDataSource(this.dataSource);

  dataSource;
  databaseEntries;
  selectedEntry;
  displayedColumns = ['title', 'category', 'shortDescription'];
  formGroup;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
  ) { }

  ngOnInit() {
    this._api.getDatabaseList().subscribe(data => this.databaseEntries = new MatTableDataSource(data));
    // this.databaseEntries = new MatTableDataSource(this.dataSource);
    this.databaseEntries.sort = this.sort;
  }



  selectRow(row) {
    this.formGroup = null;
    this.selectedEntry = row;
  }

  applyFilter(filterValue: string) {
    this.databaseEntries.filter = filterValue.trim().toLowerCase();
  }

  createFormgroup(selectedEntry?: any) {
    this.selectedEntry = null;

    if (!!selectedEntry) {
      this.formGroup = this._fb.group({
        id: selectedEntry.id,
        title: [selectedEntry.title, [Validators.required]],
        category: [selectedEntry.category, [Validators.required]],
        subCategory: [selectedEntry.subCategory, [Validators.required]],
        shortDescription: [selectedEntry.shortDescription, [Validators.required]],
        description: [selectedEntry.description, [Validators.required]],
        measurement: [selectedEntry.measurement],
        amountOnBoard: [selectedEntry.amountOnBoard],
      })
    } else {
      this.formGroup = this._fb.group({
        id: UUID.UUID(),
        title: [null, [Validators.required]],
        category: [null, [Validators.required]],
        subCategory: [null, [Validators.required]],
        shortDescription: [null, [Validators.required]],
        description: [null, [Validators.required]],
        measurement: [null],
        amountOnBoard: [null],
      })
      this.formGroup.markAllAsTouched()();
    }
  };

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


export interface DatabaseEntry {
  title: string,
  id: string,
  category: string,
  subCategory: string,
  description: string,
  shortDescription: string,
  measurement?: string,
  amountOnBoard?: string,
  image?: string
}

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}