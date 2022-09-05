import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books/books.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-book-view',
  templateUrl: './single-book-view.component.html',
  styleUrls: ['./single-book-view.component.css']
})
export class SingleBookViewComponent implements OnInit {

  book: any;

  constructor(private booksService: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.book = this.booksService.getElementById(+id);
  }

}
