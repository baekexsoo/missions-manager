import { Component, OnInit, Input } from '@angular/core';
import {BooksService} from '../services/books/books.service';

@Component({
  selector: '[app-book]',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() bookTitle: string;
  @Input() bookAuthor: string;
  @Input() bookStatus: string;
  @Input() bookId: number;
  @Input() index: number;

  detailsUrl: string;
  editUrl: string;

  constructor(private booksService: BooksService) { }

  ngOnInit() {

    this.detailsUrl = '/book/' + this.bookId;
    this.editUrl = '/book/edit/' + this.bookId;

  }

  /**
   * Method for switch the current book to taken status
   */
  onSwitchStatus(i: number, newStatus: string) {
    this.booksService.switchBookStatus(i, newStatus);
  }

}
