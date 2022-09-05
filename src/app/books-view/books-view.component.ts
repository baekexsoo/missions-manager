import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { AuthService } from '../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  books: any[];

  constructor(private booksService: BooksService, private authService: AuthService,
              private router: Router) {}

  /**
   * Lifecycle hook method
   */
  ngOnInit() {
    this.books = this.booksService.books;
  }

  /**
   *  Method for switch all the books to a different status
   */
  onSwitchAllStatus(newStatus: string) {
    this.booksService.switchAllBooksStatus(newStatus);
  }

}
