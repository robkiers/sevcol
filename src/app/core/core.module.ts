import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GenerateQRComponent } from '../shared/base-class/generate-qr/generate-qr.component';
import { MobileDisplayComponent } from './mobile-display/mobile-display.component';

@NgModule({
  declarations: [
    TopBarComponent,
    MobileDisplayComponent,
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
