import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new Subject();
  private _user: User;

  constructor() {

    this._user = new User('Rina',
      'NDA',
      'ndamarina17@gmail.com',
      'azerty');
      this._user = new User('Didier',
      'ADIO',
      'adiodidier@gmail.com',
      'azerty');
      

  }
  

  /**
   * Emit the new version of the current user
   */
  emitUserSubject() {
    this.userSubject.next(this._user);
  }

  /**
   *
   * @param updatedUser
   */
  updateUser(updatedUser: User) {
    this._user = updatedUser;
    this.emitUserSubject();
  }


  /**
   * Getter
   */
  get user(): User {
    return this._user;
  }

  /**
   * Setter
   * @param value
   */
  set user(value: User) {
    this._user = value;
  }

}
