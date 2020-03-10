import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CharacterBaseFile } from 'src/app/shared/models';

@Component({
  selector: 'app-active-crew-list',
  templateUrl: './active-crew-list.component.html',
  styleUrls: ['./active-crew-list.component.scss']
})
export class ActiveCrewListComponent implements OnInit {

  @ViewChild('activeTable', { static: false }) activeTable: MatTable<CharacterBaseFile[]>;
  @ViewChild('inactiveTable', { static: false }) inactiveTable: MatTable<CharacterBaseFile[]>;

  displayedColumns: string[] = ['position', 'image', 'name'];

  characterList: CharacterBaseFile[];

  inactiveCharcterList;
  activeCharcterList;
  deactivateList = [];

  crewList;
  activeCrewList;
  passengerList;
  knownPassengerList;

  constructor(
    public dialogRef: MatDialogRef<ActiveCrewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected _fb: FormBuilder,
    protected _api: FirebaseSharedService,
  ) { }

  ngOnInit() {
    this._api.getActiveCrewRoster().subscribe(data => {
      console.log('activeCharcterList', data);
      this.activeCharcterList = data;
    });

    this._api.getCrewRoster().subscribe(data => {
      console.log('inactiveCharcterList', data);

      this.inactiveCharcterList =
        data.filter(entry => entry.active === false);
    });
  }

  selectActiveRow(e, i) {
    if (e.active) {
      this.deactivateList.push(...this.activeCharcterList[0]);
    }
    this.inactiveCharcterList.push(this.activeCharcterList.splice(i, 1)[0]);

    this.activeTable.renderRows();
    this.inactiveTable.renderRows();
  }

  selectInactiveRow(e, i) {
    if (e.active) {
      this.deactivateList.push(...this.activeCharcterList[0]);
    }

    this.activeCharcterList.push(this.inactiveCharcterList.splice(i, 1)[0]);
    this.activeTable.renderRows();
    this.inactiveTable.renderRows();
  }

  clearActiveDuty() {
    this.inactiveCharcterList.push.apply(this.inactiveCharcterList, this.activeCharcterList);
    this.activeCharcterList = [];
    this.inactiveTable.renderRows();
  }

  updateActiveDuty() {
    const activateList = [];
    this.activeCharcterList.forEach(element => {
      if (!this.characterList.some(entry => entry.personID === element.personID)) {
        activateList.push(element);
      }
    });

    this._api.setActiveCrewRoster(activateList, this.deactivateList);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
