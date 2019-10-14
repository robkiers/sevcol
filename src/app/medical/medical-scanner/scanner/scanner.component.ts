import { Component, OnInit, ViewChild } from '@angular/core';
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
  devicesRecord;

  @ViewChild(QrScannerComponent, { static: true }) qrScannerComponent: QrScannerComponent;

  ngOnInit() {
    // this.startScan();
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
      this.devicesRecord = devices;
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
