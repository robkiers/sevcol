import { Component, OnInit } from '@angular/core';
import { TopBarService } from './core/top-bar/top-bar.service';
import 'hammerjs';
import { ShipStatsService } from './core/ship-stats/ship-stats.service';
import { BottomMenuComponent } from './core/bottom-menu/bottom-menu.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

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
    private _bottomSheet: MatBottomSheet
  ) {
    this.screenSize = this._shipstats.screenSize;
    console.log(this.screenSize);
  }

  ngOnInit() {

  }

  openBottomSheet(): void {
    console.log('open');
    this._bottomSheet.open(BottomMenuComponent);
  }

}
