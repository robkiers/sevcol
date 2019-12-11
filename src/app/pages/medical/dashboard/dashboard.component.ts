import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    // protected _db: FirebaseService,
  ) { }

  ngOnInit() {

  }

  determineScreen() {
    const innerWidth = window.innerWidth;
    console.log(innerWidth);
    if (innerWidth < 500) {
      return '3:1';
    }
    return '10:1';
  }

  //   getAvatars() {
  //     console.log('x');
  //     // console.log(
  //     this._db.getAvatars().subscribe(data => {
  //       console.log(data);
  //     }),
  //     (error => )
  // }

}
