import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';

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
    protected _api: FirebaseSharedService,
    protected _shipstats: ShipStatsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.screenSize = this._shipstats.screenSize;
  }

  result;
  resultRetrieve;

  qrResponse = null;
  scannerOpenState = true;

  @ViewChild(QrScannerComponent, { static: false }) qrScannerComponent?: QrScannerComponent;

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.startScan();
  }

  ngOnDestroy() {
    this.qrScannerComponent.stopScanning();
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (action === this.SWIPE_ACTION.RIGHT) {
      if (this.selectedIndex !== 0) {
        this.selectedIndex = this.selectedIndex - 1;
      }
    }
    if (action === this.SWIPE_ACTION.LEFT) {
      if (this.selectedIndex === 0) {
        this.selectedIndex = this.selectedIndex + 1;
      } else if (this.selectedIndex === 1 && !!this.qrResponse) {
        this.selectedIndex = this.selectedIndex + 1;
      }
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

      if ((result as string).startsWith('{')) {

        const resultJson = result.toJson();

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
      this.selectedIndex = 2;
    });
  }

  resetEntries() {
    this.result = null;
    this.resultRetrieve = null;
  }

}
