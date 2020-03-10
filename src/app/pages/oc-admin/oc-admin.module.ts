import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OcAdminDashboardComponent } from './oc-admin-dashboard/oc-admin-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: OcAdminDashboardComponent }
];

@NgModule({
  declarations: [
    OcAdminDashboardComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class OcAdminModule { }
