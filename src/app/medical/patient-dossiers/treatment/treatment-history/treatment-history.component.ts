import { Component, OnInit, Input } from '@angular/core';
import { TreatmentStoreService } from '../treatment.service';

@Component({
  selector: 'app-treatment-history',
  templateUrl: './treatment-history.component.html',
  styleUrls: ['./treatment-history.component.scss'],
  providers: [TreatmentStoreService]
})
export class TreatmentHistoryComponent implements OnInit {

  treatmentHistory$;
  displayedColumns = ['date', 'type'];

  @Input() set patient$(patient$) {
    if (!!patient$) {
      this.treatmentHistory$ = this._store.getTreatmentHistory(patient$);
    }
  }

  constructor(
    private _store: TreatmentStoreService,
  ) { }

  ngOnInit() {
    console.log('Treatment history', this.treatmentHistory$);
  }

  selectRow(row) {
    console.log('row', row);
    // this._router.navigate(['/processes', row.patientID]);
    // this.patient.next(row);
  }
}
