import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { DatabaseViewModule } from './database-view/database-view.module';
import { PatientDossierModule } from '../patient-dossiers/patient-dossiers.module';

const routes: Routes = [
  { path: '', component: ContainerComponent }
];

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    DatabaseViewModule,
    PatientDossierModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DatabaseModule { }
