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


// printContents = document.getElementById(this.printSectionId).innerHTML;
// popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
// popupWin.document.open();
// popupWin.document.write(`
//   <html>
//     <head>
//       <title>${this.printTitle ? this.printTitle : ""}</title>
//       ${this.returnStyleValues()}
//       ${this.returnStyleSheetLinkTags()}
//       ${styles}
//       ${links}
//     </head>
//     <body onload="window.print(); setTimeout(()=>{ window.close(); }, 0)">
//       ${printContents}
//     </body>
//   </html>`);
// popupWin.document.close();