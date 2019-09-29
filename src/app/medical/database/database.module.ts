import { NgModule } from '@angular/core';
import { DatabaseViewComponent } from './database-view/database-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: DatabaseViewComponent }
];

@NgModule({
  declarations: [
    DatabaseViewComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DatabaseModule { }
