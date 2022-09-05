import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user/user.service';
import {User} from '../models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {

    this.userSubscription = this.userService.userSubject.subscribe(
      (user: User) => {
        this.user = user;
      });

    // Call manually the subject for emit the first time the user
    this.userService.emitUserSubject();

  }

  /**
   * Method called for signout the user
   */
  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }


}
