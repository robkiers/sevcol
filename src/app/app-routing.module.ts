import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/medical/dashboard/dashboard.component';
import { PrintLayoutComponent } from './shared/base-class/print-layout/print-layout.component';
import { GenerateQRComponent } from './shared/base-class/generate-qr/generate-qr.component';

const routes: Routes = [
  {
    path: 'patient-list',
    loadChildren: './pages/medical/patient-dossiers/patient-dossiers.module#PatientDossierModule'
    // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  { path: '', component: DashboardComponent },
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
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice', component: GenerateQRComponent }
    ]
  }
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
