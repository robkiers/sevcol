import { NgModule } from '@angular/core';
import { TreatmentHistoryComponent } from './treatment-history/treatment-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewTreatmentComponent } from './new-treatment/new-treatment.component';

@NgModule({
  declarations: [
    TreatmentHistoryComponent,
    NewTreatmentComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TreatmentHistoryComponent,
    NewTreatmentComponent
  ]
})
export class TreatmentModule { }
