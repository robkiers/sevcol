import { Component, OnInit } from '@angular/core';
import { GenerateQRService, qrCode } from './generate-qr.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.scss']
})
export class GenerateQRComponent implements OnInit {

  qrcodeList;
  formGroup;

  constructor(
    protected _qrservice: GenerateQRService,
    protected _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this._qrservice.constructedQRCodes.subscribe(data => this.qrcodeList = data);
    this.createFormgroup();
  }

  print() {
    window.print();
  }

  addCustomInput() {
    const saveEntity = this.formGroup.getRawValue();
    if (!!saveEntity.newCode) {
      const newCodeINput = {
        type: '',
        title: 'custom',
        data: saveEntity.newCode,
      };
      this._qrservice.createQR(newCodeINput);
      this.formGroup.reset();
    }
  }

  createFormgroup() {
    this.formGroup = this._fb.group({
      newCode: '',
    });
  }

  clearCodes() {
    this._qrservice.clearQRCodeList();
  }
}
