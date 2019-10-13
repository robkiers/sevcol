import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-medical-scanner2',
  templateUrl: './medical-scanner2.component.html',
  styleUrls: ['./medical-scanner2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MedicalScanner2Component implements OnInit {

  constructor() { }

  result;

  @ViewChild(QrScannerComponent, { static: true }) qrScannerComponent: QrScannerComponent;

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
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
      this.result = result;
      console.log(result);
    });
  }

}
