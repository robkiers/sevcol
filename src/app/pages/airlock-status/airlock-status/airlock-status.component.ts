import { Component, OnInit, OnDestroy } from '@angular/core';
import { TopBarService } from 'src/app/core/top-bar/top-bar.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
// import { takeUntil } from 'rxjs/operators';
// import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-airlock-status',
  templateUrl: './airlock-status.component.html',
  styleUrls: ['./airlock-status.component.scss']
})
export class AirlockStatusComponent implements OnInit, OnDestroy {
  // protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  airlockOpen: boolean;
  peopleOffship = 2;

  constructor(
    private _shipStats: ShipStatsService,
    public _topbar: TopBarService,
  ) {
    this._topbar.hide();
  }

  ngOnInit() {
    this._shipStats._airlockOpen.subscribe(status => {
      console.log('test', status);
      this.airlockOpen = status;
    });
    // this.subscribe();
  }

  ngOnDestroy(): void {
    // this.destroyed$.next(true);
    // this.destroyed$.complete();
  }

  subscribe() {
    // this._shipStats.getAirlockStatus().pipe(takeUntil(this.destroyed$)).subscribe(status => {
    //   console.log('test');
    //   this.airlockOpen = status;
    // });
    this._shipStats._airlockOpen.subscribe(status => {
      console.log('test', status);
      this.airlockOpen = status;
    });


    // this._shipStats.getAirlockStatus().subscribe(data => {
    //   console.log('subs', data);
    //   this.airlockOpen = data;
    // });
  }
}
