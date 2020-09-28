import { Component, Input, Output, EventEmitter, Optional, Host, SkipSelf, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.scss']
})

export class TableOverviewComponent implements OnInit {

  @Input() set dataSource(dataSource) {
    this.data = new MatTableDataSource(dataSource);
    this.data.sort = this.sort;

  }

  @Input() set columns(displayedColumns) {
    this.columnFields = displayedColumns;
    this.displayedColumns = displayedColumns.map(obj => obj.definition);
  }

  @Output() rowSelect = new EventEmitter();

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  data;
  columnFields;
  displayedColumns;

  constructor(
  ) { }

  ngOnInit() {
    this.data.sort = this.sort;
    console.log('columnFields', this.columnFields);
  }


  selectRow(row) {
    this.rowSelect.emit(row);
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
  }

  isTimestamp(definition) {
    if (!!definition) {
      return definition === definition.toString() ? definition : definition.format('D MMMM YYYY');
    }

  }

  log(event) {
    console.log(event);
  }

}
