import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientViewComponent } from './patient-view/patient-view.component';

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
    RouterModule.forChild(routes),
  ]
})
export class PatientDossierModule { }
