import { NgModule } from '@angular/core';
import { PatientListComponent } from './patient-list/patient-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientDossierComponent } from './patient-dossier/patient-dossier.component';
import { ContainerComponent } from './container/container.component';

import { TreatmentModule } from './treatment/treatment.module';
import { TreatmentHistoryComponent } from './treatment/treatment-history/treatment-history.component';

const routes: Routes = [
  { path: '', component: ContainerComponent }
];

@NgModule({
  declarations: [
    PatientListComponent,
    PatientDossierComponent,
    ContainerComponent,
  ],
  imports: [
    SharedModule,
    TreatmentModule,
    // TreatmentHistoryComponent,
    RouterModule.forChild(routes),
  ]
})
export class PatientDossierModule { }
