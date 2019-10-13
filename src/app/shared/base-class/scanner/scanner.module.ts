import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrScannerComponent } from './scanner.component';
// import { NgQrScannerModule } from 'angular2-qrscanner';

@NgModule({
  declarations: [
    QrScannerComponent,
  ],
  imports: [
    CommonModule,
    // NgQrScannerModule    
  ],
  exports: [
    QrScannerComponent,
  ]
})
export class ScannerModule { }
