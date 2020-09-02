import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRComponent } from './generate-qr.component';
import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
// import { AnQrcodeModule } from 'an-qrcode';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    GenerateQRComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    // AnQrcodeModule,
    // MatInputModule,
    ReactiveFormsModule
  ]
})
export class GenerateQRModule { }
