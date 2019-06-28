import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})

export class PatientListComponent implements OnInit {

  @Input() patientList: any;

  // @Output() patient;
  @Output() patient: EventEmitter<any> = new EventEmitter(null);

  displayedColumns = ['name', 'gender', 'organisation', 'ship'];

  constructor(
  ) { }

  ngOnInit() {
    console.log('patientList', this.patientList);
  }

  selectRow(row) {
    // console.log('row', row);
    // this._router.navigate(['/processes', row.patientID]);
    this.patient.emit(row);
  }

  log(event) {
    this.patientList.subscribe(data => console.log(data));
    console.log(event);
  }


}
