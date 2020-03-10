import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenerateQRComponent } from 'src/app/shared/base-class/generate-qr/generate-qr.component';
import { ShipStatsService } from '../ship-stats/ship-stats.service';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {

  time;
  dialogClosed = true;

  constructor(
    public _dialog: MatDialog,
    private shipStats: ShipStatsService,
  ) { }

  ngOnInit() {
    // this.time = this.shipStats.getTime();
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
}
