import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit, OnDestroy, AfterViewInit {

  screenSize = 'mobile';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    protected _api: FirebaseService,
    protected _shipstats: ShipStatsService,
  ) {
    // this.screenSize = this._shipstats.screenSize;
  }

  // private contentPlaceholder: ElementRef;

  // @ViewChild('contentPlaceholder') set content(content: ElementRef) {
  //    this.contentPlaceholder = content;
  // }


  result;
  resultRetrieve;

  qrResponse = null;
  scannerOpenState = true;
  step = 0;

  currentIndex = 0;

  @ViewChild(QrScannerComponent, { static: true }) qrScannerComponent: QrScannerComponent;

  ngOnInit() {
    console.log(this.screenSize);
    console.log(this._shipstats.screenSize);
  }

  ngAfterViewInit() {
    this.startScan();
  }

  ngOnDestroy() {
    this.qrScannerComponent.stopScanning();
  }

  determineCanvas(input: string) {
    const innerWidth = window.innerWidth;

    if (input === 'width') {
      return innerWidth < 500 ? '340' : '1080';
    } else if (input === 'height') {
      return innerWidth < 500 ? '480' : '720';
    }
  }

  openPanel(index: number) {
    if (index === 0) {
      this.startScan();
    } else {
      this.qrScannerComponent.stopScanning();
    }
    this.step = index;
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {
    // console.log(currentIndex);
    console.log(action);
    // currentIndex
    // if (currentIndex > this.avatars.length || currentIndex < 0) { return; }

    // let nextIndex = 0;

    if (action === this.SWIPE_ACTION.RIGHT) {
      // const isLast = currentIndex === this.avatars.length - 1;
      // nextIndex = isLast ? 0 : currentIndex + 1;
      this.currentIndex = 0;
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
      // const isFirst = currentIndex === 0;
      // nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
      this.currentIndex = 1;

    }

    // this.avatars.forEach((x, i) => x.visible = (i === nextIndex)
  }

  startScan() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      // this.devicesRecord = devices;
      console.log(devices);
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
            }
            this.qrResponse = response
          });
        } else if (resultJson.type === 'person') {
          this._api.getPatient(resultJson.data).subscribe(entry => {
            const response = {
              type: 'person',
              data: entry,
            }
            this.qrResponse = response
          });
        }
      } else if ((result as string).startsWith('http') || (result as string).startsWith('www')) {
        const response = {
          type: 'link',
          data: result,
        }
        this.qrResponse = response
      } else {
        const response = {
          type: 'string',
          data: result,
        }
        this.qrResponse = response
      }
      this.openPanel(1);
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
