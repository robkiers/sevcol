import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { DatabaseViewComponent } from '../database-view/database-view.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  databaseEntries;
  selectedEntry;

  columns = [
    { definition: 'title', header: 'Title', width: '30%' },
    { definition: 'category', header: 'Category', width: '30%' },
    { definition: 'shortDescription', header: 'Description', width: '40%' }
  ];

  @ViewChild(DatabaseViewComponent, { static: true }) databaseViewComponent: DatabaseViewComponent;

  constructor(
    // protected _fb: FormBuilder,
    protected _api: FirebaseService,
  ) { }

  ngOnInit() {
    this._api.getDatabaseList().subscribe(data => this.databaseEntries = data);
  }

  rowSelect(row) {
    // this.formGroup = null;
    this.selectedEntry = row;
    console.log(this.selectedEntry);
  }

  createNewEntry() {

  }
}
