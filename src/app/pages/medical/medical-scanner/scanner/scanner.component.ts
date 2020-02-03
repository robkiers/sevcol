import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit, OnDestroy {

  screenSize = 'mobile';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  selectedIndex = 1;

  constructor(
    protected _api: FirebaseService,
    protected _shipstats: ShipStatsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.screenSize = this._shipstats.screenSize;
    this.determineCanvas();
  }

  result;
  resultRetrieve;

  qrWidth = '340';
  qrHeight = '480';
  qrResponse = null;
  scannerOpenState = true;
  // step = 0;

  @ViewChild(QrScannerComponent, { static: false }) qrScannerComponent?: QrScannerComponent;

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.startScan();
  }

  ngOnDestroy() {
    this.qrScannerComponent.stopScanning();
  }

  determineCanvas() {
    this.qrWidth = this.screenSize === 'mobile' ? '340' : '1080';
    this.qrHeight = this.screenSize === 'mobile' ? '480' : '720';
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (action === this.SWIPE_ACTION.RIGHT) {
      if (this.selectedIndex !== 0) {
        this.selectedIndex = this.selectedIndex - 1;
      }
    }
    if (action === this.SWIPE_ACTION.LEFT && this.selectedIndex === 0 && !!this.qrResponse) {
      this.selectedIndex = 1;
    }
    if (this.selectedIndex === 1) {
      this.startScan();
    } else {
      this.qrScannerComponent.stopScanning();
    }
  }

  setSelectedIndex(index) {
    this.selectedIndex = index;
  }

  startScan() {
    this.qrScannerComponent.getMediaDevices().then(devices => {

      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      this.resetEntries();
      console.log('result', result);

      if ((result as string).startsWith('{')) {

        const resultJson = result.toJson()
        console.log('resultJson', resultJson);

        if (resultJson.type === 'database') {
          this._api.getDatabaseEntry(resultJson.data).subscribe(entry => {
            const response = {
              type: 'database',
              data: entry,
            };
            this.qrResponse = response;
          });
        } else if (resultJson.type === 'person') {
          this._api.getPatient(resultJson.data).subscribe(entry => {
            const response = {
              type: 'person',
              data: entry,
            };
            this.qrResponse = response;
          });
        }
      } else if ((result as string).startsWith('http') || (result as string).startsWith('www')) {
        const response = {
          type: 'link',
          data: result,
        };
        this.qrResponse = response;
      } else {
        const response = {
          type: 'string',
          data: result,
        };
        this.qrResponse = response;
      }

      this.swipe();
    });
  }

  resetEntries() {
    this.result = null;
    this.resultRetrieve = null;
  }

}

export interface sevcolQR {
  type: string;
  // dataid: string,
  data: any;
}
