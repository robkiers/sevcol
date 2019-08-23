import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    protected _db: FirebaseService,
  ) { }

  ngOnInit() {
  }

  getAvatars() {
    console.log('x');
    // console.log(
    this._db.getAvatars().subscribe(data => {
      console.log(data);
    }),
    (error => )
}

}
