import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusDisplayComponent } from './status-display/status-display.component';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StatusDisplayComponent,
  },
];

@NgModule({
  declarations: [StatusDisplayComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ShipStatusDisplayModule {}
