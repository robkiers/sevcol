import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { DatabaseViewComponent } from '../database-view/database-view.component';
import { Router } from '@angular/router';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  selectedIndex = 0;

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
    private changeDetectorRef: ChangeDetectorRef,
    protected _api: FirebaseService,
    private router: Router,
    protected _shipstats: ShipStatsService,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }

  ngOnInit() {
    this._api.getDatabaseList().subscribe(data => this.databaseEntries = data);
  }

  rowSelect(row) {
    this.selectedEntry = row;
    this.selectedIndex = 1;
  }

  createNewEntry() {
    this.displayView = true;
    this.selectedEntry = null;

    this.changeDetectorRef.detectChanges();
    this.databaseViewComponent.createFormgroup();
  }

  // determineScreen(): string {
  //   const innerWidth = window.innerWidth;
  //   // console.log(innerWidth);
  //   if (innerWidth < 500) {
  //     return '1';
  //   }
  //   return '2';
  // }

  closePanel(event) {
    this.selectedIndex = 0;
  }


  swipe(action = this.SWIPE_ACTION.RIGHT) {
    console.log('swipe', action);
    if (action === this.SWIPE_ACTION.RIGHT) {
      if (this.selectedIndex === 0) {
        this.router.navigateByUrl('');
      } else {
        this.selectedIndex = 0;
      }
    }

    if (action === this.SWIPE_ACTION.LEFT && this.selectedIndex === 0 && !!this.selectedEntry) {
      this.selectedIndex = 1;
    }

  }
}
