import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ShipStatsComponent } from './ship-stats/ship-stats.component';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';

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
    TopBarComponent
  ]
})
export class CoreModule { }
