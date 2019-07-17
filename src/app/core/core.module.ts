import { NgModule } from '@angular/core';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ShipStatsComponent } from './ship-stats/ship-stats.component';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ShipStatsService } from './ship-stats/ship-stats.service';

@NgModule({
  declarations: [
    LeftMenuComponent,
    TopBarComponent,
    ShipStatsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TopBarComponent,
    // ShipStatsComponent
  ],
  providers: [ShipStatsService]

})
export class CoreModule { }
