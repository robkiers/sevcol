import { Component, OnInit } from '@angular/core';
import { GenerateQRService } from './generate-qr.service';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.scss']
})
export class GenerateQRComponent implements OnInit {

  constructor(
    _qrservice: GenerateQRService

  ) { }

  ngOnInit() {
  }

  createQR() {

  }

  print() {
    window.print();
  }
}
