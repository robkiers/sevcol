import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { DatabaseViewModule } from './database-view/database-view.module';
import { DashboardModule } from '../dashboard/dashboard.module';

const routes: Routes = [
  { path: '', component: ContainerComponent }
];

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    DatabaseViewModule,
    RouterModule.forChild(routes),
    SharedModule,
    DashboardModule
  ]
})
export class DatabaseModule { }
