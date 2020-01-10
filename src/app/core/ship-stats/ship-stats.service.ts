
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShipStatsService {

  screenSize = 'desktop';

  time;
  timeAdjustment = 5097430800000;

  private airlockOpen = new BehaviorSubject<boolean>(false);
  public _airlockOpen: Observable<boolean> = this.airlockOpen.asObservable();

  innerAirlock = false;
  outerAirlock = false;
  airlockPressurized = true;

  constructor(@Optional() @SkipSelf() parentModule: ShipStatsService) {
    if (parentModule) {
      throw new Error(
        'ShipStatsService is already loaded. Import it in the AppModule only');
    }
    console.log('ship stats', this);
    this.initiateTime();
    this.subs();
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

  subs() {
    this.screenSize = this.determineScreen();
  }

  determineScreen(): string {
    const innerWidth = window.innerWidth;
    // console.log(innerWidth);
    if (innerWidth < 500) {
      return 'mobile';
    }
    return 'desktop';
  }

  toggle() {
    // this.airlockOpen = !this.airlockOpen;
    console.log('ship-toggle', this.airlockOpen.value);
    this.airlockOpen.next(!this.airlockOpen.value);
  }

  getAirlockStatus() {
    console.log('get');
    return this.airlockOpen;
  }
  //   this.time = this.timeAdjustment + new Date().getTime();

  // setInterval(() => {
  //   this.time = this.timeAdjustment + new Date().getTime();
  // }, 60000);

  // this.router.events.subscribe(data => console.log(data));


}
