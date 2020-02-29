import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    DashboardComponent
  ],
})

export class DashboardModule { }
