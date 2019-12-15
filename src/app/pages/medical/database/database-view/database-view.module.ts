import { NgModule } from '@angular/core';
import { DatabaseViewComponent, DialogOverviewExampleDialog } from './database-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnQrcodeModule } from 'an-qrcode';

@NgModule({
  declarations: [
    DatabaseViewComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    SharedModule,
    AnQrcodeModule
  ],
  exports: [
    DatabaseViewComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ]
})
export class DatabaseViewModule { }
