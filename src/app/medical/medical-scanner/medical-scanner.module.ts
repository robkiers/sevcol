import { NgModule } from '@angular/core';
import { ScannerComponent } from './scanner/scanner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { DatabaseViewModule } from '../database/database-view/database-view.module';
// import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  { path: '', component: ScannerComponent }
];

@NgModule({
  declarations: [
    ScannerComponent,
    // CameraComponent
  ],
  imports: [
    NgQrScannerModule,
    SharedModule,
    RouterModule.forChild(routes),
    DatabaseViewModule
  ]
})
export class MedicalScannerModule { }
