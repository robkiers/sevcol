import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { DatabaseViewComponent } from '../database-view/database-view.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  screenType = 'mobile';

  databaseEntries;
  selectedEntry;
  slidePercentage = 100;

  columns = [
    { definition: 'title', header: 'Title', width: '30%' },
    { definition: 'category', header: 'Category', width: '30%' },
    { definition: 'shortDescription', header: 'Description', width: '40%' }
  ];

  displayView: boolean = false;

  @ViewChild(DatabaseViewComponent, { static: false }) databaseViewComponent?: DatabaseViewComponent;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    protected _api: FirebaseService,
  ) { }

  ngOnInit() {
    this._api.getDatabaseList().subscribe(data => this.databaseEntries = data);
  }

  rowSelect(row) {
    this.selectedEntry = row;
    this.show();
  }

  createNewEntry() {
    this.displayView = true;
    this.selectedEntry = null;

    this.changeDetectorRef.detectChanges();
    this.databaseViewComponent.createFormgroup();
  }

  determineScreen(): string {
    const innerWidth = window.innerWidth;
    // console.log(innerWidth);
    if (innerWidth < 500) {
      return '1';
    }
    return '2';
  }

  // setRecordStep(1);

  show() {
    this.displayView = true;
  }

  closePanel(event) {
    this.displayView = false;
  }

  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    console.log('action', action);
  }
}
