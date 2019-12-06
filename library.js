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
  },


};


console.log(myLibrary);