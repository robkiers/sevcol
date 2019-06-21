import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})

export class PatientListComponent implements OnInit {

  @Input() patientList: any;

  // @Output() patient;
  @Output() patient: EventEmitter<any> = new EventEmitter();

  displayedColumns = ['name', 'gender', 'organisation', 'ship'];

  constructor(
  ) { }

  ngOnInit() {
    console.log(this.patientList);
  }

  selectRow(row) {
    console.log('row', row);
    // this._router.navigate(['/processes', row.patientID]);
    this.patient.next(row);
  }

}
