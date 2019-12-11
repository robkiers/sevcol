import { NgModule } from '@angular/core';
// import { DatabaseViewComponent, DialogOverviewExampleDialog } from './database-view/database-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { DatabaseViewModule } from './database-view/database-view.module';

const routes: Routes = [
  { path: '', component: ContainerComponent }
];

@NgModule({
  declarations: [
    // DatabaseViewComponent,
    // DialogOverviewExampleDialog,
    ContainerComponent
  ],
  imports: [
    DatabaseViewModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DatabaseModule { }
