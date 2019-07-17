import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { ShipStatsService } from '../ship-stats/ship-stats.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  time;
  // timeAdjustment = 5097430800000;

  constructor(
    private shipStats: ShipStatsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {


    // .pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => this.activatedRoute),
    //   map(route => route.firstChild),
    //   switchMap(route => route.data),
    //   map(data => console.log(data))
    // )
  }

  ngOnInit() {
    this.time = this.shipStats.getTime();
    // this.time = this.timeAdjustment + new Date().getTime();

    // setInterval(() => {
    //   this.time = this.timeAdjustment + new Date().getTime();
    // }, 60000);

    // this.router.events.subscribe(data => console.log(data));

    console.log(new Date('25 January 2181').getTime() - new Date().getTime());
  }

  log() {
    console.log(this.activatedRoute.snapshot.url);
    console.log(this.router);
  }

}
