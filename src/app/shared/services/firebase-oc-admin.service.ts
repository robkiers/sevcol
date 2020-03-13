import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseOcAdminService {

  constructor(
    public db: AngularFirestore
  ) { }


  getSevcolTime() {
    return this.db.collection('shipStats').doc('time').valueChanges();
  }

  updateSevcolDate() {

  }

  updateSevcolTimeOffset() {

  }
}
