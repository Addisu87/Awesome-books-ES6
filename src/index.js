import Book from '../modules/bookClass.js';
import gotoPage from '../modules/gotoPage.js';

const titleBookInput = document.getElementById('title-input');
const authorBookInput = document.getElementById('author-input');
const bookForm = document.getElementsByTagName('form')[0];
const addBtn = document.getElementById('add-btn');
const dateTime = document.getElementById('dateTime');
const bookCounter = document.getElementById('counter');

let counter = 0;

titleBookInput.addEventListener('input', () => {
  bookCounter.style.animation = '';
  return bookCounter.style.animation;
});

// date format
const myDate = () => {
  const today = new Date();
  dateTime.innerHTML = today.toLocaleString();
};
setInterval(myDate, 1000);

// navigation
const links = document.querySelectorAll('.nav-a');

// Prevent Form from Submit
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

// Book counter
const showCounter = () => {
  counter += 1;
  bookCounter.innerHTML = counter;
  bookCounter.style.display = 'initial';
  bookCounter.style.animation = 'highLightEffect 1s ease-in';
};

const hideCounter = () => {
  bookCounter.style.display = 'none';
  counter = 0;
};

// Event Listeners
addBtn.addEventListener('click', () => {
  if (titleBookInput.value !== '' && authorBookInput.value !== '') {
    const newBook = new Book(
      Book.booksArr.length,
      titleBookInput.value,
      authorBookInput.value
    );
    newBook.Add();
    showCounter();
    Book.clearField();
  }
});

links.forEach((link, i) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    gotoPage(link);
    if (i === 0) hideCounter();
    if (i === 1) titleBookInput.focus();
  });
});

// Method to load Content
Book.load();
