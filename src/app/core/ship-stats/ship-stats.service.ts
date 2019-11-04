import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipStatsService {

  time;
  timeAdjustment = 5097430800000;
  airlock: boolean;

  constructor() {
    console.log('ship stats');
    this.initiateTime();
  }

  initiateTime() {
    this.time = new Date(this.timeAdjustment + new Date().getTime());

    setInterval(() => {
      this.time = new Date(this.timeAdjustment + new Date().getTime());
    }, 60000);

    // this.router.events.subscribe(data => console.log(data));
  }

  getTime() {
    return this.time;
  }
  //   this.time = this.timeAdjustment + new Date().getTime();

  // setInterval(() => {
  //   this.time = this.timeAdjustment + new Date().getTime();
  // }, 60000);

  // this.router.events.subscribe(data => console.log(data));


}
