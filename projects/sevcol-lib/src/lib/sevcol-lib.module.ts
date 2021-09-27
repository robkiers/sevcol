import { NgModule } from '@angular/core';
import { SevcolLibComponent } from './sevcol-lib.component';
import { TimeDisplayComponent } from './time-display/time-display.component';



@NgModule({
  declarations: [
    SevcolLibComponent,
    TimeDisplayComponent
  ],
  imports: [
  ],
  exports: [
    SevcolLibComponent
  ]
})
export class SevcolLibModule { }
