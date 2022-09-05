import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksService } from './services/books/books.service';
import { BookComponent } from './book/book.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { AuthService } from './services/auth/auth.service';
import { ErrorViewComponent } from './error-view/error-view.component';
import { SingleBookViewComponent } from './single-book-view/single-book-view.component';
import { HeaderComponent } from './header/header.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { NewBookViewComponent } from './new-book-view/new-book-view.component';
import { EditBookViewComponent } from './edit-book-view/edit-book-view.component';
import { ProfilViewComponent } from './profil-view/profil-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthViewComponent,
    BooksViewComponent,
    ErrorViewComponent,
    SingleBookViewComponent,
    HeaderComponent,
    NewBookViewComponent,
    EditBookViewComponent,
    ProfilViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BooksService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
