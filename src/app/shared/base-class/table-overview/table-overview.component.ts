import { Component, Input, Output, EventEmitter, Optional, Host, SkipSelf } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.scss']
})

export class TableOverviewComponent {

  // @Input() set dataSource(dataSource) {
  //   console.log(dataSource);
  //   this.data = new MatTableDataSource(dataSource)
  // }
  @Input() set dataSource(dataSource) {
    this.data = dataSource;
    // console.log(dataSource)
  }

  @Input() set columns(displayedColumns) {
    this.columnFields = displayedColumns;
    console.log(displayedColumns);
    console.log(displayedColumns.map(obj => obj.definition));
    this.displayedColumns = displayedColumns.map(obj => obj.definition);
    
    // .filter(column => displayedColumns.definition);
  }

  // @Input() columns

  @Output() rowSelect = new EventEmitter();

  data;
  columnFields;
  displayedColumns;

  constructor(
  ) { }

  selectRow(row) {
    this.rowSelect.emit(row);
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
  }

  determine

}
