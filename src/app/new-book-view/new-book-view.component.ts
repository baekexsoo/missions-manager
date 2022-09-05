import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books/books.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-book-view',
  templateUrl: './new-book-view.component.html',
  styleUrls: ['./new-book-view.component.css']
})
export class NewBookViewComponent implements OnInit {

  defaultStatus = 'ter';

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Method for handle submit of the new book form
   */
  onSubmitNewBook(form: NgForm) {

    const bookName = form.value.bookName;
    const authorName = form.value.authorName;
    const description = form.value.description;
    const status = form.value.status;

    this.bookService.addBook(bookName, authorName, description, status);

    this.router.navigate(['/books']);
  }
}
