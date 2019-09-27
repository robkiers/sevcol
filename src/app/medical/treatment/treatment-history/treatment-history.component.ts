import { Component, OnInit, Input } from '@angular/core';
import { TreatmentStoreService } from '../treatment.service';
import { TreatmentService } from 'src/app/shared/services/treatment.service';

@Component({
  selector: 'app-treatment-history',
  templateUrl: './treatment-history.component.html',
  styleUrls: ['./treatment-history.component.scss'],
})
export class TreatmentHistoryComponent implements OnInit {

  SCOPE = 'TreatmentHistoryComponent';

  treatmentHistory$;
  displayedColumns = ['date', 'doctor', 'reasonOfVisit'];

  @Input() set patient$(patient$) {
    if (!!patient$) {
      console.log('trigger' + this.SCOPE, patient$);
      this.treatmentHistory$ = this._store.getTreatmentHistory(patient$);
      // this.treatmentHistory$.subscribe(data => console.log('data', data));
    }
  }

  constructor(
    private _store: TreatmentStoreService,
    protected _api: TreatmentService,
  ) { }

  ngOnInit() {
  }

  selectRow(row) {
    console.log('row', row);
    // this._api.deleteTreatment(row);
    // this._router.navigate(['/processes', row.patientID]);
    // this.patient.next(row);
  }
}
