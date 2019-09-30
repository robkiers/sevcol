import { NgModule } from '@angular/core';
import { PatientListComponent } from './patient-list/patient-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientDossierComponent } from './patient-dossier/patient-dossier.component';
import { ContainerComponent } from './container/container.component';

import { NewPatientComponent } from './new-patient/new-patient.component';
import { TreatmentModule } from '../treatment/treatment.module';
import { PatientViewComponent } from './patient-view/patient-view.component';

const routes: Routes = [
  // { path: 'new-patient', component: NewPatientComponent },
  // { path: '', component: ContainerComponent }
  { path: '', component: PatientViewComponent }
];

@NgModule({
  declarations: [
    PatientListComponent,
    PatientDossierComponent,
    ContainerComponent,
    NewPatientComponent,
    PatientViewComponent,
  ],
  imports: [
    SharedModule,
    TreatmentModule,
    // TreatmentHistoryComponent,
    RouterModule.forChild(routes),
  ]
})
export class PatientDossierModule { }
