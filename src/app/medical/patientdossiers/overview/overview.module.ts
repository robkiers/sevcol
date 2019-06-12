import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: OverviewComponent }
];

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class OverviewModule { }
