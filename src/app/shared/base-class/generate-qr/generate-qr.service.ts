import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenerateQRService {

  // constructedQRCodes: qrCode[];
  private constructedQRCodes$ = new BehaviorSubject<qrCode[]>([]);
  public constructedQRCodes: Observable<qrCode[]> = this.constructedQRCodes$.asObservable();

  constructor() { }

  createQR(entry: qrCode) {
    const currentValue = this.constructedQRCodes$.value;
    const updatedValue = [...currentValue, entry];
    console.log(updatedValue);
    this.constructedQRCodes$.next(updatedValue);
  }

  clearQRCodeList() {
    this.constructedQRCodes$.next([]);
  }
}

export interface qrCode {
  title: string;
  data: string;
  type: string;
}
