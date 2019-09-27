import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalScannerComponent } from './medical-scanner/medical-scanner.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MedicalScannerComponent }
];

@NgModule({
  declarations: [
    MedicalScannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ScannerModule { }
