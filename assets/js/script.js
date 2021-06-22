
let myLibrary = [];
let newBook;
let newBook2;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
newBook = new Book("Dawn", "Nietszche", "300", true)
addBookToLibrary(newBook)
newBook2 = new Book("Frankenstein", "M Shelley", "300", true)
addBookToLibrary(newBook2)
console.log("My Library", myLibrary)

function onSubmit() {
  alert("You clicked me")
}