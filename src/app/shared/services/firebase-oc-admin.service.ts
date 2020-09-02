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

  updateShipWarning(shipWarning) {
    // this.db.collection('characterlists').doc('passengeractivity').collection('passengeractivity')
    //   .doc(characterActivity.personID).set(Object.assign(characterActivity));
    // updateShipwarning
  }
}
