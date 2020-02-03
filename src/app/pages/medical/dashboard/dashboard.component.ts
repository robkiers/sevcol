import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})

export class DashboardComponent implements OnInit {

  screenSize;

  // @Output  = 1;
  @Output() selectedTab: EventEmitter<number> = new EventEmitter();
  @Output() createNew: EventEmitter<boolean> = new EventEmitter();

  constructor(
    protected _shipstats: ShipStatsService,
    protected _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }

  ngOnInit() {

  }

  gotoDatabase() {
    if (this._route.snapshot.parent.url.toString() === 'medical-database') {
      this.selectedTab.emit(1);
    } else {
      this._router.navigate(['./medical-database']);
    }
  }

  gotoScanner() {
    if (this._route.snapshot.parent.url.toString() === 'medical-scanner') {
      this.selectedTab.emit(1);
    } else {
      this._router.navigate(['./medical-scanner']);
    }
  }

  gotoPatientFiles() {
    if (this._route.snapshot.parent.url.toString() === 'patient-list') {
      this.selectedTab.emit(1);
    } else {
      this._router.navigate(['./patient-list']);
    }
  }

  gotoNewPatient() {
    if (this._route.snapshot.parent.url.toString() === 'patient-list') {
      this.createNew.emit(true);
      this.selectedTab.emit(2);
    } else {
      this._router.navigate(['./patient-list']);
      this.createNew.emit(true);
      this.selectedTab.emit(2);
    }
  }
}
