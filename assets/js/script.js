let myLibrary = [];
let newBook;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
// newBook = new Book("Dawn", "Nietszche", "300", true)
// addBookToLibrary(newBook)
// newBook2 = new Book("Frankenstein", "M Shelley", "300", true)
// addBookToLibrary(newBook2)
// console.log("My Library", myLibrary)

function onSubmit() {
  //Get the values from HTML from
  titleValue = document.getElementById('titleInput').value;
  authorValue = document.getElementById('authorInput').value;
  pagesValue = document.getElementById('pagesInput').value;
  readValue = document.getElementById('readInput').checked;

  //Create the book
  newBook = new Book(titleValue, authorValue, pagesValue, readValue)
  //Add the book to the library
  addBookToLibrary(newBook)
  //Display the library
  console.log("My Library", myLibrary)
}