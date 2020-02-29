import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/medical/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'patient-list',
    loadChildren: './pages/medical/patient-dossiers/patient-dossiers.module#PatientDossierModule'
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'medical-scanner',
    loadChildren: './pages/medical/medical-scanner/medical-scanner.module#MedicalScannerModule'

    // src\app\medical\\medical-scanner.module.ts
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'medical-database',
    loadChildren: './pages/medical/database/database.module#DatabaseModule'
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'airlock-status',
    loadChildren: './pages/airlock-status/airlock-status.module#AirlockStatusModule'
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'airlock',
    loadChildren: './pages/airlock/airlock.module#AirlockModule'
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'oc-admin',
    loadChildren: './pages/oc-admin/oc-admin.module#OcAdminModule'
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
