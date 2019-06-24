import { Component, OnInit } from '@angular/core';
import { PatientdossiersService } from '../patient-dossiers.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [PatientdossiersService]
})

export class ContainerComponent implements OnInit {

  patientList$;
  displayedColumns = ['name', 'gender', 'organisation', 'ship'];

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
  }

  log(event) {
    this.store.getPatientList().subscribe(data => console.log(data));

    console.log(event);
  }

}
