import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GenerateQRComponent } from '../shared/base-class/generate-qr/generate-qr.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [
    TopBarComponent,
    BottomMenuComponent
  ],
  imports: [
    SharedModule,
    MatBottomSheetModule
  ],
  exports: [
    TopBarComponent,
    BottomMenuComponent
  ],
  entryComponents: [
    GenerateQRComponent,
    BottomMenuComponent
  ]
})
export class CoreModule { }
