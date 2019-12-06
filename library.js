let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

function addBook(title, author, pages, status) {
  let book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

function deleteBook(pos) {
  myLibrary.splice(pos, 1);
}

addBook('ender game', 'jay', '300', 'unread');
console.log(myLibrary);

let handlers = {
  addBook: function() {
    let titleInput = document.getElementById('titleInput');
    let authorInput = document.getElementById('authorInput');
    let pagesInput = document.getElementById('pagesInput');
    let statusInput = document.getElementById('statusInput').value;
    let status = (true) ? "read" : "unread";

    addBook(titleInput.value, authorInput.value, pagesInput.value, status);

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusInput.value = '';

    view.displayBooks();
  },
  deleteBook: function(pos) {
    deleteBook(pos);
    view.displayBooks();
  },
};

let view = {
  displayBooks: function () {
    let booksUl = document.querySelector('ul');
    booksUl.innerHTML = '';

    myLibrary.forEach(function(book, pos) {
      let bookLi = document.createElement('li');
      let bookDescription = `${book.title}, ${book.author}, ${book.pages} pages, ${book.status}`;
      bookLi.id = pos;
      bookLi.textContent = bookDescription;
      bookLi.appendChild(view.createDeleteButton());
      booksUl.appendChild(bookLi);
    });
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setupEventListener: function() {
    let booksUl = document.querySelector('ul');

    booksUl.addEventListener('click', function(event) {
      let elementClicked = event.target;

      if (elementClicked.className === 'deleteButton') {
        handlers.deleteBook(parseInt(elementClicked.parentNode.id))
      }
    });
  },
};

view.setupEventListener();

console.log(myLibrary);