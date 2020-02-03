import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { DatabaseViewComponent } from '../database-view/database-view.component';
import { Router } from '@angular/router';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
// import { TabService } from 'src/app/shared/tab-components/tab.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  selectedIndex = 1;
  tabs = 3;

  screenSize = 'mobile';

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
    protected _api: FirebaseService,
    protected _shipstats: ShipStatsService,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }

  ngOnInit() {
    this._api.getDatabaseList().subscribe(data => this.databaseEntries = data);
    console.log('init database container');
  }

  rowSelect(row) {
    this.selectedEntry = row;
    this.selectedIndex = 2;
  }

  createNewEntry() {
    this.selectedIndex = 2;
    this.databaseViewComponent.createFormgroup();
  }

  closePanel(event) {
    this.selectedIndex = 0;
  }

  setSelectedIndex(index) {
    this.selectedIndex = index;
  }


  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (action === this.SWIPE_ACTION.RIGHT) {
      if (this.selectedIndex !== 0) {
        this.selectedIndex = this.selectedIndex - 1;
      }
    }

    if (action === this.SWIPE_ACTION.LEFT) {
      if (this.selectedIndex !== 2) {
        if (this.selectedIndex === 1 && !this.selectedEntry) {
          return;
        } else {
          this.selectedIndex = this.selectedIndex + 1;
        }
      }
    }
  }
}
