import { Component, OnInit } from '@angular/core';
// import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { ShipWarning } from 'src/app/shared/models/shipWarning.model';
import { FirebaseOcAdminService } from 'src/app/shared/services/firebase-oc-admin.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  sevcolTime;
  timeFormGroup: FormGroup;

  date;
  timeOffset;

  displayedColumns = ['position', 'message', 'priority', 'active'];

  constructor(
    protected _api: FirebaseOcAdminService,
    protected _shipstats: ShipStatsService,
    protected _fb: FormBuilder,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }


  ngOnInit() {
    this.time = this._shipstats.getTime();
    // this.timeOffset =
    // this._api.getSevcolTime().subscribe(data => console.log('data', data));
    this._api.getSevcolTime().subscribe(data => {
      this.sevcolTime = data;
      this.createTimeFormGroup(data);
    });
    // console.log(this.sevcolTime$ = this._api.getSevcolTime());
  }

  createTimeFormGroup(data) {
    console.log(data);

    this.timeFormGroup = this._fb.group({
      sevcolTime: new Date(data.sevcolDate),
      timeOffset: data.timeOffset,
    });

    console.log(this.timeFormGroup);
  }


  selectRow(row) {
    console.log(row);
    row.active = !row.active;
    // this._api.updateShipwarning(row);
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

  logThis(event) {
    console.log(event);

  }
}
