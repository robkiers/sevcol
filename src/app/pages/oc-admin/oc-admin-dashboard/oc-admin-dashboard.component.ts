import { Component, OnInit } from '@angular/core';
// import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { ShipWarning } from 'src/app/shared/models/shipWarning.model';
import { FirebaseOcAdminService } from 'src/app/shared/services/firebase-oc-admin.service';
import { Observable } from 'rxjs';

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
    },
    {
      message: 'HELP',
      priority: 1,
      active: true
    }
  ];

  time;

  sevcolTime$: Observable<any>;

  date;
  timeOffset;

  displayedColumns = ['position', 'message', 'priority', 'active'];

  constructor(
    protected _api: FirebaseOcAdminService,
    protected _shipstats: ShipStatsService,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }


  ngOnInit() {
    this.time = this._shipstats.getTime();
    // this.timeOffset =
    this._api.getSevcolTime().subscribe(data => console.log('data', data));
    this.sevcolTime$ = this._api.getSevcolTime();
    console.log(this.sevcolTime$ = this._api.getSevcolTime());
  }


  selectRow(row) {
    console.log(row);
  }

  createNewShipwarning() {

  }

  deleteWarning(event, shipwarning) {
    console.log(shipwarning);
  }

  updateDate() {

  }

  updateTime() {

  }
}
