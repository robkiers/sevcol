import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './medical/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'patient-list',
    loadChildren: './medical/patient-dossiers/patient-dossiers.module#PatientDossierModule'
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
