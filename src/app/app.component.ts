import { Component, OnInit } from '@angular/core';
import { TopBarService } from './core/top-bar/top-bar.service';
import 'hammerjs';
import { TabService } from './shared/tab-components/tab.service';
import { Tab } from './shared/tab-components/tab.model';
import { DashboardComponent } from './pages/medical/dashboard/dashboard.component';
import { ShipStatsService } from './core/ship-stats/ship-stats.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'CSAI - Celestra Software Assistant Interface';

  tabs = new Array<Tab>();
  selectedTab: number;

  screenSize = 'mobile';

  constructor(
    public _topbar: TopBarService,
    private tabService: TabService,
    protected _shipstats: ShipStatsService,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }

  ngOnInit() {
    this.addNewTab();

    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  tabChanged(event) {
    console.log('tab changed');
  }

  addNewTab() {
    this.tabService.addTab(
      new Tab(DashboardComponent, 'Medical Dashboard', { parent: 'AppComponent' })
    );
    // new Tab();
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}
