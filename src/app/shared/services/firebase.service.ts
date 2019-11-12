
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { CharacterBaseFile } from 'src/app/core/models';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

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
    // this.itemscollection.doc(id).ref.get()
    return this.db.collection('databaselist').doc(entry).valueChanges();
  }

  createDatabseEntry(entry) {
    return this.db.collection('databaselist').doc(entry.id).set(Object.assign(entry));
  }

  getCharacterList() {
    return this.db.collection('characterlist').valueChanges().pipe(
      map(data => data as CharacterBaseFile[])
    );
  }

  createCharacter(entry) {
    return this.db.collection('characterlist').doc(entry.personID).set(Object.assign(entry));
  }

  setActiveCrewRoster(activateList, deactivateList) {
    const batch = this.db.firestore.batch();

    activateList.forEach(element => {
      console.log('element', element);

      const characterReference: DocumentReference =
        firebase.firestore().collection('characterlists').doc('characteractivity').collection('characteractivity').doc(element.personID);
      batch.set(characterReference, element);
    });

    deactivateList.forEach(element => {
      console.log('element', element);
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
    // return this.db.collection('characterlists').doc('characteractivity').set(Object.assign(entry));
  }

}

// getAvatars(){
//   return this.db.collection('/avatar').valueChanges()
// }

// getUser(userKey){
// return this.db.collection('users').doc(userKey).snapshotChanges();
// }

// updateUser(userKey, value){
// value.nameToSearch = value.name.toLowerCase();
// return this.db.collection('users').doc(userKey).set(value);
// }

// deleteUser(userKey){
// return this.db.collection('users').doc(userKey).delete();
// }

// getUsers(){
// return this.db.collection('users').snapshotChanges();
// }

// searchUsers(searchValue){
// return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
//   .where('nameToSearch', '<=', searchValue + '\uf8ff'))
//   .snapshotChanges()
// }

// searchUsersByAge(value){
// return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
// }


// createUser(value, avatar){
// return this.db.collection('users').add({
//   name: value.name,
//   nameToSearch: value.name.toLowerCase(),
//   surname: value.surname,
//   age: parseInt(value.age),
//   avatar: avatar
// });
// }