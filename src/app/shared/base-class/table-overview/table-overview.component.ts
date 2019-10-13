import { Component, Input, Output, EventEmitter, Optional, Host, SkipSelf } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.scss']
})

export class TableOverviewComponent {

  @Input() set dataSource(dataSource) {
    this.data = new MatTableDataSource(dataSource);
  }

  @Input() set columns(displayedColumns) {
    this.columnFields = displayedColumns;
    this.displayedColumns = displayedColumns.map(obj => obj.definition);
  }

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

  isTimestamp(definition) {
    if (!!definition) {
      console.log(definition);
      // return definition.instante('Timestamp') ? definition.toDate() : definition;
      // return definition ===  ? definition.toDate() : definition;

      // return new Date(definition) ? true : false;
      return definition === definition.toString() ? definition : definition.format('D MMMM YYYY');
      // new Date(definition).toLocaleString();
      // return definition === definition.toString() ? definition : definition.toDate();
    }

  }

}
