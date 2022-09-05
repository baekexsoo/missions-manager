import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../services/user/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent implements OnInit, OnDestroy {

  msg: string;

  userForm: FormGroup;

  user: User;
  userSubscription: Subscription;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.userSubscription = this.userService.userSubject.subscribe(
      (user: User) => {
        this.user = user;
      });

    // Call manually the subject for emit the first time the user
    this.userService.emitUserSubject();

    // Init the form
    this._initForm();

  }

  /**
   * Method for initialize the form
   * @private
   */
  _initForm() {

    this.userForm = this.formBuilder.group({
      'firstName': [this.user.firstname, Validators.required],
      'lastName': [this.user.lastname, Validators.required],
      'email': [this.user.email, [Validators.email, Validators.required]],
      'password': [this.user.password, Validators.required],
    });

  }

  /**
   * Method called when the form is submit
   */
  onSubmitForm() {

    const formVals = this.userForm.value;

    const updatedUser = new User(formVals.firstName,
      formVals.lastName,
      formVals.email,
      formVals.password);

    this.userService.updateUser(updatedUser);
    this.msg = 'Mise à jour réussie !';
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
