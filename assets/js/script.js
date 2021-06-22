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
  renderLibrary();



  // // Find a <table> element with id="myTable":
  // var table = document.getElementById("libraryTable");

  // // Create an empty <tr> element and add it to the 1st position of the table:
  // var row = table.insertRow(1);

  // // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  // var cell1 = row.insertCell(0); //Number
  // var cell2 = row.insertCell(1); //Title
  // var cell3 = row.insertCell(2); //Author
  // var cell4 = row.insertCell(3); //PAges
  // var cell5 = row.insertCell(4); //Read

  // // Add some text to the new cells:
  // cell1.innerHTML = "NEW CELL1";
  // cell2.innerHTML = titleValue;
}


function renderLibrary() {
  let i = 0;
  let num = myLibrary.length-1;
  console.log(num)
 
  //Loop the library
 for (i = 0; i <= num; i++) {

// Find a <table> element with id="myTable":
var table = document.getElementById("libraryTable");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
  
 }

  //inside the loop add each book into the table

}