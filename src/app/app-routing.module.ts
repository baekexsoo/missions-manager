import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksViewComponent} from './books-view/books-view.component';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {ErrorViewComponent} from './error-view/error-view.component';
import {SingleBookViewComponent} from './single-book-view/single-book-view.component';
import {AuthViewComponent} from './auth-view/auth-view.component';
import {NewBookViewComponent} from './new-book-view/new-book-view.component';
import {EditBookViewComponent} from './edit-book-view/edit-book-view.component';
import {ProfilViewComponent} from './profil-view/profil-view.component';

const routes: Routes = [
  { path: 'auth', component: AuthViewComponent },
  { path: 'missions', canActivate: [AuthGuardService], component: BooksViewComponent},
  { path: 'mission/new', canActivate: [AuthGuardService], component: NewBookViewComponent},
  { path: 'mission/edit/:id', canActivate: [AuthGuardService], component: EditBookViewComponent},
  { path: 'mission/:id', canActivate: [AuthGuardService], component: SingleBookViewComponent},
  { path: 'profil', canActivate: [AuthGuardService], component: ProfilViewComponent},
  { path: '', canActivate: [AuthGuardService], component: BooksViewComponent },
  { path: 'not-found', component: ErrorViewComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
