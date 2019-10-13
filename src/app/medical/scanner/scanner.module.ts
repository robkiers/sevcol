import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
// import { NgQrScannerModule } from 'angular2-qrscanner';
import { MedicalScannerComponent } from './medical-scanner/medical-scanner.component';
import { MedicalScanner2Component } from './medical-scanner2/medical-scanner2.component';

import { ScannerModule } from 'src/app/shared/base-class/scanner/scanner.module';

const routes: Routes = [
  { path: '', component: MedicalScanner2Component }
];

@NgModule({
  declarations: [
    MedicalScannerComponent,
    MedicalScanner2Component
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    
    // NgQrScannerModule 
  ]
})
export class MedicalScannerModule { }
