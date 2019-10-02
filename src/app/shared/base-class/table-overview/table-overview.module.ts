import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOverviewComponent } from './table-overview.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    TableOverviewComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    TableOverviewComponent
  ]
})
export class TableOverviewModule { }
