const myLibrary = [];

function Book(title, author, category, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, category, pages, readStatus) {
    const newBook = new Book(title, author, category, pages, readStatus);
    myLibrary.push(newBook);
  }

addBookToLibrary("Lord of the Rings", "tomas tank", "brother", 259, false);
addBookToLibrary("Salmon Lores", "shelbty", "gang", 222, true);
addBookToLibrary("Jeffrey Dahmer", "jeffrey tank", "shooting", 123, true);
console.log(myLibrary[0]);

const mainScreen = document.querySelector('.mainscreen');
myLibrary.forEach(book => {
    const bookScreen = document.createElement('div');
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = "Title: " + book.title;
    const bookAuthor = document.createElement('h6');
    bookAuthor.textContent = "Author: " + book.author;
    const bookCategory = document.createElement('h6');
    bookCategory.textContent = "Category: " + book.category;
    const bookPages = document.createElement('h6');
    bookPages.textContent = "Pages: " + book.pages;
    const bookReadStatus = document.createElement('button');
    bookReadStatus.textContent = book.readStatus;
    bookScreen.appendChild(bookTitle);
    bookScreen.appendChild(bookAuthor);
    bookScreen.appendChild(bookCategory);
    bookScreen.appendChild(bookPages);
    bookScreen.appendChild(bookReadStatus);
    bookScreen.classList.add('bookScreen')
    mainScreen.appendChild(bookScreen);
});

const buttonScreen = document.querySelector('.addbook');

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    alert(obj.bookTitle);
    const addedBook = new Book(obj.bookTitle, obj.bookAuthor, obj.bookCategory, obj.bookPages, obj.bookReadStatus);
    const addedBookNode = document.createElement('div');
    
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = "Title: " + addedBook.title;
    const bookAuthor = document.createElement('h6');
    bookAuthor.textContent = "Author: " + addedBook.author;
    const bookCategory = document.createElement('h6');
    bookCategory.textContent = "Category: " + addedBook.category;
    const bookPages = document.createElement('h6');
    bookPages.textContent = "Pages: " + addedBook.pages;
    const bookReadStatus = document.createElement('button');
    bookReadStatus.textContent = addedBook.bookReadStatus;
    addedBookNode.appendChild(bookTitle);
    addedBookNode.appendChild(bookAuthor);
    addedBookNode.appendChild(bookCategory);
    addedBookNode.appendChild(bookPages);
    addedBookNode.appendChild(bookReadStatus);
    addedBookNode.classList.add('bookScreen')
    mainScreen.appendChild(addedBookNode);


    mainScreen.appendChild(addedBookNode);
});