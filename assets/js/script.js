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
  emptyTable();
  renderLibrary();

}

function emptyTable() {
  let table = document.getElementById("libraryTable");
  let bodyRef = table.getElementsByTagName('tbody')[0];
  bodyRef.innerHTML = '';
}

function renderLibrary() {
  let i = 0;
  let num = myLibrary.length - 1;

  // Find a <table> element with id="myTable":



  var tableRef = document.getElementById('libraryTable').getElementsByTagName('tbody')[0];

  //Loop the library
  for (i = 0; i <= num; i++) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    isRead = myLibrary[i].read === true ? "Yes" : "No";
    tableRef.insertRow().innerHTML =

      "<tr> <th scope='row'>" + (i + 1).toString() + "</th>" +
      "<td>" + myLibrary[i].title + "</td>" +
      "<td>" + myLibrary[i].author + "</td>" +
      "<td>" + myLibrary[i].pages + "</td>" +
      "<td>" + isRead + "</td> </tr>";


  }

  //inside the loop add each book into the table

}