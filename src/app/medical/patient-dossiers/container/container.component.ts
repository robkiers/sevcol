import { Component, OnInit } from '@angular/core';
import { PatientdossiersService } from '../patient-dossiers.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [PatientdossiersService]
})

export class ContainerComponent implements OnInit {

  patientList$;
  treatmentHistory$;

  displayedColumns = ['name', 'gender', 'organisation', 'ship'];

  // patient: BehaviorSubject<any> = new BehaviorSubject(null);
  patient$: Subject<any> = new Subject();

  showNewTreatment = false;

  constructor(
    private store: PatientdossiersService,
  ) { }

  ngOnInit() {

    this.patientList$ = this.store.getPatientList();
    console.log('container', this.patientList$);

    // this._store.subscribe
    // this.store.patientList.subscribe(list => );

    // get(LOOKUPS.UI_PROPERTIES).pipe(takeUntil(this.destroyed$)).subscribe(lookup => {
    //   this.itemPropertyLookup = lookup;
    //   this.filterItemPropertyLookup = [...lookup];
    // });

  }

  setPatient(event) {
    console.log(event);

    this.patient$.next(event);
    // this.store.setPatient(event);
  }

  clearPatient() {
    this.patient$.next(null);
  }

  newTreatment() {
    this.showNewTreatment = true;
  }

  log(event) {
    this.store.getPatientList().subscribe(data => console.log(data));

    console.log(event);
  }

}
