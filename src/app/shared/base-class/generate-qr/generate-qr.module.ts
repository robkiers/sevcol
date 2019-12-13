import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRComponent } from './generate-qr.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { image } from 'qr-image';

@NgModule({
  declarations: [GenerateQRComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    
  ]
})
export class GenerateQRModule { }
