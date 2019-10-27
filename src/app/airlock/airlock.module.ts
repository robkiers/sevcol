import { NgModule } from '@angular/core';
import { AirlockComponent } from './airlock/airlock.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: AirlockComponent }
  // { path: '', component: PatientViewComponent }
];

@NgModule({
  declarations: [
    AirlockComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AirlockModule { }
