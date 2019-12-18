import { NgModule } from '@angular/core';
import { DatabaseViewComponent, DialogOverviewExampleDialog } from './database-view.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DatabaseViewComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    DatabaseViewComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ]
})
export class DatabaseViewModule { }
