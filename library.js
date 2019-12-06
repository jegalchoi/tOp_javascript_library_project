let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.status}`;
  }
}

function addBookToLibrary(title, author, pages, status) {
  let book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

addBookToLibrary('ender game', 'jay', '300 pages', 'not yet read');
console.log(myLibrary);