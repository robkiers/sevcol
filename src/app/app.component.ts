import { Component, OnInit } from '@angular/core';
import { TopBarService } from './core/top-bar/top-bar.service';
import 'hammerjs';
import { DashboardComponent } from './pages/medical/dashboard/dashboard.component';
import { ShipStatsService } from './core/ship-stats/ship-stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'CSAI - Celestra Software Assistant Interface';

  selectedTab: number;

  screenSize = 'mobile';

  constructor(
    public _topbar: TopBarService,
    protected _shipstats: ShipStatsService,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }

  ngOnInit() {

  }

}
