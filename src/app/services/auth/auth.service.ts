import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private userService: UserService) {
  }

  /**
   * Method for check if the credentials are equal
   * @param email The email input by the user
   * @param password The password input by the user
   */
  checkAuth(email, password) {

    const user = this.userService.user;

    return new Promise(
      (res, rej) => {
        setTimeout(
          () => {
            // If credentials not equel reject the promise
            if (user.email !== email || user.password !== password) {
              rej('Les identifiants sont incorrects.');
            }

            // Else just call the signIn function
            this.signIn(res);
          }, 1000
        );
      }
    );

  }

  /**
   * Method for sign in a user
   * @param res The response to return
   */
  signIn(res) {
    this.isAuth = true;
    res(true);
  }

  /**
   * Method for sign out a user
   */
  signOut() {
    this.isAuth = false;
  }

}
