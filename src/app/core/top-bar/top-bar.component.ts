import { Component, OnInit } from '@angular/core';
import { ShipStatsService } from '../ship-stats/ship-stats.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TopBarService } from './top-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { GenerateQRComponent } from 'src/app/shared/base-class/generate-qr/generate-qr.component';
import { ActivatedRoute, UrlSegment, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  visible = true;
  time;
  showBack;

  formGroup: FormGroup;
  dialogClosed = true;

  constructor(
    private shipStats: ShipStatsService,
    public nav: TopBarService,
    public _dialog: MatDialog,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.time = this.shipStats.getTime();
    console.log(new Date('25 January 2181').getTime() - new Date().getTime());

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url === '/') {
        this.showBack = false;
      } else {
        this.showBack = true;
      }
    });
  }

  openQRPrint() {
    const dialogRef = this._dialog.open(GenerateQRComponent, {
      width: '21cm',
      height: '29.7cm',
    });
    this.dialogClosed = false;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogClosed = true;
    });
  }

  logIn() {
    const dialogRef = this._dialog.open(LoginComponent, {
      width: '600px',
      height: '400px',
    });
    this.dialogClosed = false;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogClosed = true;
    });
  }

}
