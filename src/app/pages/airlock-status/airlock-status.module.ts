import { NgModule } from '@angular/core';
import { AirlockStatusComponent } from './airlock-status/airlock-status.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: AirlockStatusComponent }
];

@NgModule({
  declarations: [
    AirlockStatusComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AirlockStatusModule { }
