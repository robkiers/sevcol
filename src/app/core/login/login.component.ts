import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseSharedService } from 'src/app/shared/services/firebase.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  formGroup;
  signedIn = false;

  constructor(
    protected _fb: FormBuilder,
    protected _api: FirebaseSharedService,
    protected _auth: AuthenticationService,
  ) { }

  ngOnInit() {
    this.createFormgroup();
  }

  createFormgroup() {
    this.formGroup = this._fb.group({
      accountName: '',
      password: '',
    });

    console.log('created');
  }

  submitLogin() {
    // SignIn
    const test = this.formGroup.getRawValue();
    this._auth.signIn(test.accountName, test.password).then(data => {
      console.log(data);
      this.signedIn = data;
    });
  }

  registerLogin() {

  }

  cancel() {
    this._auth.isSignedin();
  }
}
