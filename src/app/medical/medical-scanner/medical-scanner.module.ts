import { NgModule } from '@angular/core';
import { ScannerComponent } from './scanner/scanner.component';
// import { ScannerModule } from 'src/app/shared/base-class/scanner/scanner.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { DatabaseModule } from '../database/database.module';

const routes: Routes = [
  { path: '', component: ScannerComponent }
];

@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    NgQrScannerModule,
    SharedModule,
    RouterModule.forChild(routes),
    DatabaseModule
  ]
})
export class MedicalScannerModule { }
