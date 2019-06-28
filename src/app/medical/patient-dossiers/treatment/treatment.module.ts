import { NgModule } from '@angular/core';
import { TreatmentHistoryComponent } from './treatment-history/treatment-history.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TreatmentHistoryComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TreatmentHistoryComponent
  ]
})
export class TreatmentModule { }
