import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MedicalRecordsComponent } from './medical-records.component';

const routes: Routes = [
  { path: '', component: MedicalRecordsComponent }
];

@NgModule({
  declarations: [
    MedicalRecordsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MedicalRecordsModule { }
