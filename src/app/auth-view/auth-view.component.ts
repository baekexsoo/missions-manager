import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  errorMsg: string;

  authForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this._initForm();

  }

  /**
   * Method for initialize the form
   * @private
   */
  _initForm() {
    this.authForm = this.formBuilder.group({
      'email': ['', [Validators.email, Validators.required]],
      'password': ['', Validators.required]
    });
  }

  /**
   * Method for try to sign in the user
   */
  onSignIn() {

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    this.authService.checkAuth(email, password)
      .then(
        () => {
          this.router.navigate(['books']);
        },
        (err) => {
          this.errorMsg = err;
        }
      );

  }


}
