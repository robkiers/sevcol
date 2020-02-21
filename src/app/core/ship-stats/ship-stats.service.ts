
import { Injectable, SkipSelf, Optional, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ShipStatsService implements OnInit {

  screenSize = 'desktop';

  // time;
  timeAdjustment = 5097430800000;

  private airlockOpen = new BehaviorSubject<boolean>(false);
  public _airlockOpen: Observable<boolean> = this.airlockOpen.asObservable();

  private time = new BehaviorSubject<any>(this.timeAdjustment + new Date().getTime());
  public _time: Observable<any> = this.time.asObservable();

  private user = new BehaviorSubject<any>(null);
  public _user: Observable<any> = this.user.asObservable();



  innerAirlock = false;
  outerAirlock = false;
  airlockPressurized = true;

  constructor(
    // @Optional() @SkipSelf()
    parentModule: ShipStatsService,
    private _auth: AuthenticationService,
  ) {
    if (parentModule) {
      throw new Error(
        'ShipStatsService is already loaded. Import it in the AppModule only');
    }
    this.initiateTime();
    this.subs();
    // this.user.next(this._auth.isSignedin());

  }

  ngOnInit() {
    console.log('init');
    console.log(this._auth.isSignedin());

  }

  initiateTime() {
    setInterval(() => {
      this.time.next(new Date(this.timeAdjustment + new Date().getTime()));
    }, 60000);

  }

  getTime() {
    return this.time;
  }

  subs() {
    this.screenSize = this.determineScreen();
  }

  determineScreen(): string {
    const innerWidth = window.innerWidth;
    if (innerWidth < 500) {
      return 'mobile';
    }
    return 'desktop';
  }

}
