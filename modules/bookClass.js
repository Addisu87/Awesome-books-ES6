// Class
export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static booksArr = [];

  // Remove a Book
  static remove() {
    Book.booksArr = Book.booksArr.filter(
      (book) => +book.id !== +this.parentElement.id
    );
    this.parentElement.remove();

    Book.booksArr.forEach((book, i) => {
      book.id = i;
      document.getElementById('book-container').children[i].id = i;
    });

    localStorage.setItem('Books', JSON.stringify(Book.booksArr));
  }

  // create a Book
  create(id = this.id, title = this.title, author = this.author) {
    const bookElement = `
    <div id="${id}" class="book">
        <div class="book-details">
          <p class="book-title">${title}</p>
          <span class="by">&nbsp;by&nbsp;</span>
          <p class="book-author">${author}</p>
        </div>
        <button class="btn remove-btn" type="button">Remove</button>
    </div`;

    document
      .getElementById('book-container')
      .insertAdjacentHTML('beforeend', bookElement);

    const removeBtn = document.getElementsByClassName('remove-btn');

    removeBtn[removeBtn.length - 1].addEventListener('click', Book.remove);
  }

  // Add a Book
  Add() {
    const newBook = new Book(this.id, this.title, this.author);
    newBook.create();
    Book.booksArr.push(newBook);
    localStorage.setItem('Books', JSON.stringify(Book.booksArr));
  }

  // Clear Fields
  static clearField() {
    titleBookInput.value = '';
    authorBookInput.value = '';
  }

  static load(bookData = JSON.parse(localStorage.getItem('Books'))) {
    if (bookData !== null) {
      bookData.forEach((book) => {
        const newBook = new Book(book.id, book.title, book.author);
        newBook.create();
      });
      Book.booksArr = bookData;
    }
    document.getElementById('list-link').click();
  }
}
