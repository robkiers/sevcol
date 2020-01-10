import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GenerateQRComponent } from '../shared/base-class/generate-qr/generate-qr.component';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TopBarComponent,
  ],
  entryComponents: [
    GenerateQRComponent
  ]
})
export class CoreModule { }
