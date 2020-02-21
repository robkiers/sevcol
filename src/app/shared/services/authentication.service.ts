import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any;

  constructor(
    firestore: AngularFirestore,
    // public afAuth: AngularFireAuth,
  ) {
    this.authInit();
    /* Saving user data in localstorage when 
logged in and setting up null when logged out */
    // firebase.auth().

    // .authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }

    // });

  }

  authInit() {


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed in.', user);
        this.userData = user;
      } else {
        this.userData = null;

        console.log('No user is signed in.', user);
        // return user;

        // No user is signed in.
      }
    });
    console.log('Init authentication service', this.userData);

  }

  // Sign up with email/password
  // SignUp(email, password) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       // window.alert('You have been successfully registered!');
  //     }).catch((error) => {
  //       // window.alert(error.message);
  //     });
  // }

  // Sign in with email/password
  signIn(email, password) {

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('succes', result);
        return true;
        // this.router.navigate(['<!-- enter your route name here -->']);
      }).catch((error) => {
        console.log('error', error);
        return false;
        // window.alert(error.message);
      });
  }

  isSignedin() {

    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed in.', user);
        return user;
      } else {
        console.log('No user is signed in.', user);
        // return user;

        // No user is signed in.
      }
    });
  }

}

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });