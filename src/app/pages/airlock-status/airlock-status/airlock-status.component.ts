import { Component, OnInit, OnDestroy } from '@angular/core';
import { TopBarService } from 'src/app/core/top-bar/top-bar.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { AirlockStatus } from '../../airlock/airlock/airlock.component';
import { CharacterBaseFile } from 'src/app/core/models';
// import { takeUntil } from 'rxjs/operators';
// import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-airlock-status',
  templateUrl: './airlock-status.component.html',
  styleUrls: ['./airlock-status.component.scss']
})
export class AirlockStatusComponent implements OnInit {

  airlockOpen: boolean;
  peopleOffship = 2;
  time;

  constructor(
    private _shipStats: ShipStatsService,
    public _topbar: TopBarService,
    protected _api: FirebaseSharedService,
  ) {
    this._topbar.hide();
  }

  ngOnInit() {
    this.setAirlockStatus();
    this.setDisembarked();
    this.time = this._shipStats.getTime();
  }

  setAirlockStatus() {
    this._api.getAirlockStatus().subscribe((data: AirlockStatus) => {
      if (data.innerAirlockOpen && data.outerAirlockOpen) {
        this.airlockOpen = true;
      } else {
        this.airlockOpen = false;
      }
    });
  }

  setDisembarked() {
    this._api.getActiveCrewRoster().subscribe((data: CharacterBaseFile[]) => {
      let peopleOffship = 0;
      for (const dat of data) {
        if (dat.disembarked) {
          peopleOffship = peopleOffship + 1;
        }
      }
      this.peopleOffship = peopleOffship;
    });
  }

}
