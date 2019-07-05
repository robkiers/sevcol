import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
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
    // console.log(this.activatedRoute.snapshot.url);
    // console.log(this.router)

    // this.router.events.subscribe(data => {
    //   if (!!data) {
    //     console.log(data);
    //     // console.log(data[0].myKey1);
    //   }
    // });

    this.router.events.subscribe(data => console.log(data));
  }

  log() {
    console.log(this.activatedRoute.snapshot.url);
    console.log(this.router)
  }

}
