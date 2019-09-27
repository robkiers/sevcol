
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
    return this.db.collection('patient').doc(personID).snapshotChanges();
  }

  createPatient(patient) {
    return this.db.collection('patientlist').doc(patient.personID).set(Object.assign(patient));
  }

  getPatientTreatmentList(personID) {
    return this.db.collection('patient').doc(personID)
      .collection('treatmentlist').valueChanges();
  }

  createTreatment(treatment) {
    return this.db.collection('patient').doc(treatment.personID)
      .collection('treatmentlist').doc(treatment.treatmentID).set(Object.assign(treatment));
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