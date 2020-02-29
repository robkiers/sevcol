import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { NewPatientComponent } from './new-patient/new-patient.component';
import { MedicalRecordsModule } from '../medical-records/medical-records.module';
import { ContainerComponent } from './container/container.component';
import { PatientViewModule } from './patient-view/patient-view.module';
import { DashboardModule } from '../dashboard/dashboard.module';

const routes: Routes = [
  { path: 'new-patient', component: NewPatientComponent },
  { path: '', component: ContainerComponent }
];

@NgModule({
  declarations: [
    NewPatientComponent,
    ContainerComponent,
  ],
  imports: [
    DashboardModule,
    SharedModule,
    MedicalRecordsModule,
    PatientViewModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientDossierModule { }
