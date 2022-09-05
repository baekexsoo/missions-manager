import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books = [
    {
      id: 1,
      title: 'Mission 1',
      author: 'CBA 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ' +
        'eleifend felis est, id mattis augue blandit at. Duis nec eros eget libero ornare commodo.',
      status: 'Terminée'
    },
    {
      id: 2,
      title: 'Mission 2',
      author: 'CBA 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ' +
        'eleifend felis est, id mattis augue blandit at. Duis nec eros eget libero ornare commodo.',
      status: 'En Cours'
    },
    {
      id: 3,
      title: 'Mission 3',
      author: 'CBA 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ' +
        'eleifend felis est, id mattis augue blandit at. Duis nec eros eget libero ornare commodo.',
      status: 'En Cours'
    },
    {
      id: 4,
      title: 'Mission 4',
      author: 'CBA 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ' +
        'eleifend felis est, id mattis augue blandit at. Duis nec eros eget libero ornare commodo.',
      status: 'Terminée'
    }
  ];

  constructor() {
  }

  /**
   * Method for quick switch all books status
   */
  switchAllBooksStatus(newStatus: string) {
    for (const book of this.books) {
      book.status = newStatus;
    }
  }

  /**
   * Method for quick switch book status by index
   */
  switchBookStatus(i: number, newStatus: string) {
    this.books[i].status = newStatus;
  }

  /**
   * Method for search a book by id in the books array
   */
  getElementById(id: number) {
    const book = this.books.find(
      (s) => {
        return s.id === id;
      }
    );
    return book;
  }

  /**
   * Method for add a new book to the array
   */
  addBook(bookName: string, authorName: string, description: string, status: string) {
    const bookObject = {
      id: 0,
      title: '',
      author: '',
      description: '',
      status: ''
    };

    bookObject.id = this.books[(this.books.length - 1)].id + 1;
    bookObject.title = bookName;
    bookObject.author = authorName;
    bookObject.description = description;
    bookObject.status = status;

    this.books.push(bookObject);
  }

  /**
   * Method for edit an existing book from the array
   */
  editBook(book: any) {
    const index = book.id - 1;
    this.books[index].title = book.title;
    this.books[index].author = book.author;
    this.books[index].description = book.description;
    this.books[index].status = book.status;
  }
}
