import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipStatsService } from '../ship-stats/ship-stats.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TopBarService } from './top-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { GenerateQRComponent } from 'src/app/shared/base-class/generate-qr/generate-qr.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  visible = true;
  time;
  // timeAdjustment = 5097430800000;
  formGroup: FormGroup;
  dialogClosed = true;


  constructor(
    private shipStats: ShipStatsService,
    private router: Router,
    protected _fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public nav: TopBarService,
    public _dialog: MatDialog,
  ) {

    // .pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => this.activatedRoute),
    //   map(route => route.firstChild),
    //   switchMap(route => route.data),
    //   map(data => console.log(data))
    // )
  }

  ngOnInit() {
    this.createFormgroup();

    this.time = this.shipStats.getTime();
    // this.time = this.timeAdjustment + new Date().getTime();

    // setInterval(() => {
    //   this.time = this.timeAdjustment + new Date().getTime();
    // }, 60000);

    // this.router.events.subscribe(data => console.log(data));

    console.log(new Date('25 January 2181').getTime() - new Date().getTime());
  }

  createFormgroup() {
    this.formGroup = this._fb.group({
      email: '',
      password: ''
    });
  }

  log() {
    console.log(this.activatedRoute.snapshot.url);
    console.log(this.router);
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }


  // openQRPrint() {

  // }
  // width: 21cm;
  // height: 29.7cm;
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
}
