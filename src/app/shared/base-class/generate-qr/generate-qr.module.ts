import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRComponent } from './generate-qr.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnQrcodeModule } from 'an-qrcode';
@NgModule({
  declarations: [
    GenerateQRComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AnQrcodeModule,
  ]
})
export class GenerateQRModule { }
