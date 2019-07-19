import { NgModule } from '@angular/core';
import { TreatmentHistoryComponent } from './treatment-history/treatment-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewTreatmentComponent } from './new-treatment/new-treatment.component';
import { TreatmentStoreService } from './treatment.service';

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
  ],
  providers: [
    TreatmentStoreService
  ]
})
export class TreatmentModule { }
