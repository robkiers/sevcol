import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/medical/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'patient-list',
    // loadChildren: './pages/medical/patient-dossiers/patient-dossiers.module#PatientDossierModule'
    loadChildren: () => import('./pages/medical/patient-dossiers/patient-dossiers.module').then(m => m.PatientDossierModule)
  },
  {
    path: 'medical-scanner',
    // loadChildren: './pages/medical/medical-scanner/medical-scanner.module#MedicalScannerModule'
    loadChildren: () => import('./pages/medical/medical-scanner/medical-scanner.module').then(m => m.MedicalScannerModule)
  },
  {
    path: 'medical-database',
    // loadChildren: './pages/medical/medical-database/database.module#MedicalDatabaseModule'
    loadChildren: () => import('./pages/medical/medical-database/database.module').then(m => m.DatabaseModule)
  },
  {
    path: 'airlock-status',
    // loadChildren: './pages/airlock-status/airlock-status.module#AirlockStatusModule'
    loadChildren: () => import('./pages/airlock-status/airlock-status.module').then(m => m.AirlockStatusModule)
  },
  {
    path: 'airlock',
    // loadChildren: './pages/airlock/airlock.module#AirlockModule'
    loadChildren: () => import('./pages/airlock/airlock.module').then(m => m.AirlockModule)
  },
  {
    path: 'oc-admin',
    // loadChildren: './pages/oc-admin/oc-admin.module#OcAdminModule'
    loadChildren: () => import('./pages/oc-admin/oc-admin.module').then(m => m.OcAdminModule)
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
