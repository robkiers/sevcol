import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { MedicalRecordsModule } from '../medical-records/medical-records.module';

const routes: Routes = [
  { path: 'new-patient', component: NewPatientComponent },
  // { path: '', component: ContainerComponent }
  { path: '', component: PatientViewComponent }
];

@NgModule({
  declarations: [
    NewPatientComponent,
    PatientViewComponent,
  ],
  imports: [
    SharedModule,
    MedicalRecordsModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientDossierModule { }
