import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatabaseViewComponent } from '../database/database-view/database-view.component';
import { DatabaseModule } from '../database/database.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DatabaseModule
  ],
  exports: [
    DashboardComponent
  ],
  entryComponents: [
    DatabaseViewComponent
  ]
})

export class DashboardModule { }
