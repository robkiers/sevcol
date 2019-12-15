import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRComponent } from './generate-qr.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnQrcodeModule } from 'an-qrcode';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    GenerateQRComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AnQrcodeModule,
    NgxPrintModule
  ]
})
export class GenerateQRModule { }
