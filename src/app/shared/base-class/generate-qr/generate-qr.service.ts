import { Injectable } from '@angular/core';
import { image } from 'qr-image';

@Injectable({
  providedIn: 'root'
})
export class GenerateQRService {

  constructedQRCodes;

  constructor() { }

  createQR(entry) {
    console.log('entry', entry);
    // entry
    image(entry.id);
  }
}
