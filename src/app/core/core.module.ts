import { NgModule } from '@angular/core';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    LeftMenuComponent,
    TopBarComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TopBarComponent,
  ],
})
export class CoreModule { }
