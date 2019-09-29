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
  {
    path: 'medical-scanner',
    loadChildren: './medical/scanner/scanner.module#ScannerModule'
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'medical-database',
    loadChildren: './medical/database/database.module#DatabaseModule'
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
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
