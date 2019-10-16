import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  constructor(
    protected _api: FirebaseService,
  ) { }

  result;
  resultRetrieve;
  scannerOpenState = true;
  step = 0;


  canvasWidth = '340';
  canvasheight = '480';

  @ViewChild(QrScannerComponent, { static: true }) qrScannerComponent: QrScannerComponent;

  ngOnInit() {
  }

  // determineCanvas() {
  //   const innerWidth = window.innerWidth;

  //   this.canvasWidth = innerWidth < 500 ? '340' : '1080';
  //   this.canvasheight = innerWidth < 500 ? '480' : '720';
  // }

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

  startScan() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      // this.devicesRecord = devices;
      // console.log(devices);
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

      this._api.getDatabaseEntry(result).subscribe(entry => {
        console.log(entry);
        if (!!entry) {
          this.resultRetrieve = entry
        } else
          this.result = result;
      });
      this.openPanel(1);
    });
  }

  resetEntries() {
    this.result = null;
    this.resultRetrieve = null;
  }

}
