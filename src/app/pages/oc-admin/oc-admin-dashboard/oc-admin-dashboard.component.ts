import { Component, OnInit } from '@angular/core';
import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { ShipWarning } from 'src/app/shared/models/shipWarning.model';

@Component({
  selector: 'app-oc-admin-dashboard',
  templateUrl: './oc-admin-dashboard.component.html',
  styleUrls: ['./oc-admin-dashboard.component.scss']
})
export class OcAdminDashboardComponent implements OnInit {

  screenSize = 'mobile';
  databaseEntries: ShipWarning[] = [
    {
      message: 'HELP',
      priority: 1,
      active: true
    }
  ];

  time;

  columns = [
    { definition: 'message', header: 'message', width: '50%' },
    { definition: 'priority', header: 'priority', width: '50%' },
    { definition: 'active', header: 'active', width: '50%' },
  ];

  constructor(
    protected _api: FirebaseSharedService,
    protected _shipstats: ShipStatsService,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }


  ngOnInit() {
    this.time = this._shipstats.getTime();
  }


  rowSelect(row) {
    // this.selectedEntry = row;
    // this.selectedIndex = 2;
  }

  createNewEntry() {

  }
}
