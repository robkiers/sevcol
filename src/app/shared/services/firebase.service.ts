
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseSharedService {

  constructor(
    public db: AngularFirestore
  ) { }

  getPatientList() {
    return this.db.collection('patientlist').valueChanges();
  }

  getPatient(personID: string) {
    return this.db.collection('patientlist').doc(personID).valueChanges();
  }

  createPatient(patient) {
    return this.db.collection('patientlist').doc(patient.personID).set(Object.assign(patient));
  }

  getMedicalRecordsList(patient) {
    return this.db.collection('patient').doc(patient.personID)
      .collection('medicalRecordList').valueChanges();
  }

  upsertMedicalRecord(record) {
    return this.db.collection('patient').doc(record.personID)
      .collection('medicalRecordList').doc(record.recordID).set(Object.assign(record));
  }

  getDatabaseList() {
    return this.db.collection('databaselist').valueChanges();
  }

  getDatabaseEntry(entry) {
    return this.db.collection('databaselist').doc(entry).valueChanges();
  }

  createDatabseEntry(entry) {
    return this.db.collection('databaselist').doc(entry.id).set(Object.assign(entry));
  }

  getCharacterList() {
    return this.db.collection('characterlist').valueChanges();
  }

  createCharacter(entry) {
    const batch = this.db.firestore.batch();

    const activityReference: DocumentReference =
      firebase.firestore().collection('characterlists').doc('characteractivity').collection('characteractivity').doc(entry.personID);
    batch.set(activityReference, entry);

    const characterReference: DocumentReference =
      firebase.firestore().collection('characterlists').doc('characterlist').collection('characterlist').doc(entry.personID);
    batch.set(characterReference, entry);



    batch.commit().then(() => {
      console.log('succes');
    });
  }

  setActiveCrewRoster(activateList, deactivateList) {
    const batch = this.db.firestore.batch();

    activateList.forEach(element => {
      const characterReference: DocumentReference =
        firebase.firestore().collection('characterlists').doc('characteractivity').collection('characteractivity').doc(element.personID);
      batch.set(characterReference, element);
    });

    deactivateList.forEach(element => {
      const characterReference: DocumentReference =
        firebase.firestore().collection('characterlists').doc('characteractivity').collection('characteractivity').doc(element.personID);
      batch.delete(characterReference);
    });

    batch.commit().then(() => {
      console.log('succes');
    });
  }

  getActiveCrewRoster() {
    return this.db.collection('characterlists').doc('characteractivity').collection('characteractivity').valueChanges();
  }

  getActivePassengerList() {
    return this.db.collection('characterlists').doc('passengeractivity').collection('passengeractivity').valueChanges();
  }

  getCrewRoster() {
    return this.db.collection('characterlists').doc('celestracrew').collection('celestracrew').valueChanges();
  }

  updateCrewRoster(character) {
    return this.db.collection('characterlists').doc('celestracrew').collection('celestracrew')
      .doc(character.personID).set(Object.assign(character));
  }

  registerCharacter(characterBaseFile, characterActivity, patientFile) {
    this.db.collection('characterlists').doc('characterlist').collection('characterlist')
      .doc(characterBaseFile.personID).set(Object.assign(characterBaseFile));

    this.db.collection('characterlists').doc('celestracrew').collection('celestracrew')
      .doc(characterActivity.personID).set(Object.assign(characterActivity));

    if (characterActivity.active) {
      this.db.collection('characterlists').doc('characteractivity').collection('characteractivity')
        .doc(characterActivity.personID).set(Object.assign(characterActivity));
    }

    this.db.collection('patientlist').doc(patientFile.personID).set(Object.assign(patientFile));
  }

  getPassengerList() {
    return this.db.collection('characterlists').doc('passengerlist').collection('passengerlist').valueChanges();
  }

  registerPassenger(characterBaseFile, characterActivity, patientFile) {
    this.db.collection('characterlists').doc('characterlist').collection('characterlist')
      .doc(characterBaseFile.personID).set(Object.assign(characterBaseFile));

    this.db.collection('characterlists').doc('passengerlist').collection('passengerlist')
      .doc(characterActivity.personID).set(Object.assign(characterActivity));

    if (characterActivity.active) {
      this.db.collection('characterlists').doc('passengeractivity').collection('passengeractivity')
        .doc(characterActivity.personID).set(Object.assign(characterActivity));
    }

    this.db.collection('patientlist').doc(patientFile.personID).set(Object.assign(patientFile));
  }

  updatePassengerActivity(characterActivity) {
    this.db.collection('characterlists').doc('passengeractivity').collection('passengeractivity')
      .doc(characterActivity.personID).set(Object.assign(characterActivity));
  }

  delistPassenger(characterActivity) {
    this.db.collection('characterlists').doc('passengeractivity').collection('passengeractivity')
      .doc(characterActivity.personID).delete();

    this.db.collection('characterlists').doc('passengerlist').collection('passengerlist')
      .doc(characterActivity.personID).update(characterActivity);
  }

  getAirlockStatus() {
    return this.db.collection('shipStats').doc('airlock').valueChanges();
  }

  toggleAirlock(status) {
    return this.db.collection('shipStats').doc('airlock').set(Object.assign(status));
  }
}
