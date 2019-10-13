import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-database-view',
  templateUrl: './database-view.component.html',
  styleUrls: ['./database-view.component.scss']
})
export class DatabaseViewComponent implements OnInit {

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
    { value: 'units', viewValue: 'Units' },
    // { value: 'mole', viewValue: 'Mole' },
    // { value: 'candela', viewValue: 'Candela' },
  ];


  // databaseEntries;
  // selectedEntry;

  // columns = [
  //   { definition: 'title', header: 'Title', width: '30%' },
  //   { definition: 'category', header: 'Category', width: '30%' },
  //   { definition: 'shortDescription', header: 'Description', width: '40%' }
  // ];

  formGroup;

  @Input() selectedEntry;

  // @Input() set patient(patient) {
  // this.resetProperties();
  // 
  // this.patientFile = patient;
  // this._api.getMedicalRecordsList(patient).subscribe(data => {
  //   this.medicalRecords = new MatTableDataSource(data)
  // });
  // 
  // }

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // this._api.getDatabaseList().subscribe(data => this.databaseEntries = data);
  }

  // rowSelect(row) {
  //   this.formGroup = null;
  //   this.selectedEntry = row;
  // }

  // applyFilter(filterValue: string) {
  //   this.databaseEntries.filter = filterValue.trim().toLowerCase();
  // }

  createFormgroup(selectedEntry?: any) {
    this.selectedEntry = null;

    if (!!selectedEntry) {
      this.formGroup = this._fb.group({
        id: selectedEntry.id,
        title: [selectedEntry.title, [Validators.required]],
        category: [selectedEntry.category, [Validators.required]],
        subCategory: [selectedEntry.subCategory, [Validators.required]],
        shortDescription: [selectedEntry.shortDescription, [Validators.required, Validators.maxLength(100)]],
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


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      data: {
        name: 'test', animal: 'animal'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  cancelDialog(): void {
    this.dialogRef.close();
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