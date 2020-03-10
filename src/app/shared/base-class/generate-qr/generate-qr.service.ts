import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SevcolQR } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class GenerateQRService {

  private constructedQRCodes$ = new BehaviorSubject<SevcolQR[]>([]);
  public constructedQRCodes: Observable<SevcolQR[]> = this.constructedQRCodes$.asObservable();

  constructor() { }

  createQR(entry: SevcolQR) {
    const currentValue = this.constructedQRCodes$.value;
    const updatedValue = [...currentValue, entry];
    this.constructedQRCodes$.next(updatedValue);
  }

  clearQRCodeList() {
    this.constructedQRCodes$.next([]);
  }
}
