import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { CharcterActivity, CharacterBaseFile } from 'src/app/shared/models';

@Component({
  selector: 'app-find-passenger',
  templateUrl: './find-passenger.component.html',
  styleUrls: ['./find-passenger.component.scss']
})
export class FindPassengerComponent implements OnInit {

  activePassengerList: CharcterActivity[];
  passengerList: CharacterBaseFile[];

  columns = [
    { definition: 'position', header: '', width: '30%' },
    { definition: 'image', header: '', width: '30%' },
    { definition: 'name', header: 'Name', width: '40%' },
  ];

  constructor(
    public dialogRef: MatDialogRef<FindPassengerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected _api: FirebaseSharedService,
  ) { }

  ngOnInit() {
    this._api.getActivePassengerList().subscribe((data: CharacterBaseFile[]) => {
      this.activePassengerList = data;
      if (!!this.passengerList) {
        this.passengerList = this.filterList(this.passengerList);
      }
    });

    this._api.getPassengerList().subscribe((data: CharacterBaseFile[]) => {
      if (!!data) {
        this.passengerList = this.filterList(data);
      }
    });
  }

  filterList(baseFiles: CharacterBaseFile[]) {
    return baseFiles.filter(baseFile => {
      return !this.activePassengerList.some(activePassenger => activePassenger.personID === baseFile.personID);
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  rowSelect(event) {
    const characterActivity: CharcterActivity = {
      personID: event.personID,
      cardNumber: !!event.cardNumber ? event.cardNumber : null,

      name: event.name,
      familyName: event.familyName,
      imageLocation: !!event.imageLocation ? event.imageLocation : null,

      active: true,
      disembarked: false,
      alive: true,
    };
    this._api.updatePassengerActivity(characterActivity);
  }
}
