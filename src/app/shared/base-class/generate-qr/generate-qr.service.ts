import { Injectable } from '@angular/core';
// import * as qrCodeGen from 'qr-image';
// import { }


@Injectable({
  providedIn: 'root'
})
export class GenerateQRService {

  constructedQRCodes;

  constructor() { }

  createQR(entry) {
    // qrCodeGen.image(entry.id);
  }
}
