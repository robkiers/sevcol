import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { TabService } from 'src/app/shared/tab-components/tab.service';
import { DatabaseViewComponent } from '../database/database-view/database-view.component';
import { Tab } from 'src/app/shared/tab-components/tab.model';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  screenSize;

  constructor(
    private tabService: TabService,
    protected _shipstats: ShipStatsService,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }


  ngOnInit() {

  }

  // determineScreen() {
  //   const innerWidth = window.innerWidth;
  //   if (innerWidth < 500) {
  //     return '3:1';
  //   }
  //   return '10:1';
  // }

  addTab(tab: string) {
    this.tabService.addTab(
      new Tab(DatabaseViewComponent, 'Database', { parent: 'DashboardComponent' })
    );
  }
}
