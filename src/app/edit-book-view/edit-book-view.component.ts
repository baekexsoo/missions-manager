import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../services/books/books.service';

@Component({
  selector: 'app-edit-book-view',
  templateUrl: './edit-book-view.component.html',
  styleUrls: ['./edit-book-view.component.css']
})
export class EditBookViewComponent implements OnInit {

  book: any;

  constructor(private booksService: BooksService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.book = this.booksService.getElementById(+id);
  }

  /**
  * Method for handle submit of the edit book form
  */
  onSubmitEditBook() {
    this.booksService.editBook(this.book);

    this.router.navigate(['/books']);
  }
}
