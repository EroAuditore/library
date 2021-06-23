let myLibrary = [];
let newBook;

function renderLibrary() {
  let i = 0;
  const num = myLibrary.length - 1;
  let tableTD;
  let tableRow;
  const tableRef = document.getElementById('libraryTable').getElementsByTagName('tbody')[0];

  // Loop the library
  for (i = 0; i <= num; i += 1) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    const isRead = myLibrary[i].read === true ? 'Yes' : 'No';
    // Create main Row
    tableRow = document.createElement('tr'); // Create a <li> node

    // Create columns
    tableTD = document.createElement('td'); // Create a text node
    tableTD.innerHTML = (i + 1).toString();
    tableRow.appendChild(tableTD);

    tableTD = document.createElement('td'); // Create a text node
    tableTD.innerHTML = myLibrary[i].title;
    tableRow.appendChild(tableTD);

    tableTD = document.createElement('td'); // Create a text node
    tableTD.innerHTML = myLibrary[i].author;
    tableRow.appendChild(tableTD);

    tableTD = document.createElement('td'); // Create a text node
    tableTD.innerHTML = myLibrary[i].pages;
    tableRow.appendChild(tableTD);

    tableTD = document.createElement('td'); // Create a text node
    tableTD.innerHTML = isRead;
    tableRow.appendChild(tableTD);

    // Action button
    const btn = document.createElement('BUTTON');
    btn.innerHTML = 'Delete';
    btn.className = 'btn btn-danger';
    btn.id = myLibrary[i].title;

    const btnRead = document.createElement('BUTTON');
    btnRead.innerHTML = 'Read Status';
    btnRead.className = 'btn btn-success';
    btnRead.id = myLibrary[i].title;

    btn.addEventListener('click', function () {
      removeBook(this.id);
      emptyTable();
      renderLibrary();
    });

    btnRead.addEventListener('click', function () {
      readStatus(this.id);
      emptyTable();
      renderLibrary();
    });

    tableTD = document.createElement('td');

    tableTD.appendChild(btn);
    tableTD.appendChild(btnRead);
    tableRow.appendChild(tableTD);

    // Append the text to <li>
    tableRef.appendChild(tableRow); // Append <li> to <ul> with id="myList"
  }
}

window.onload = function () {
  myLibrary = JSON.parse(localStorage.getItem('library') || '[]');
  renderLibrary();
};

function SaveLibrary() {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  SaveLibrary();
}

// eslint-disable-next-line no-use-before-define
function emptyTable() {
  const table = document.getElementById('libraryTable');
  const bodyRef = table.getElementsByTagName('tbody')[0];
  bodyRef.innerHTML = '';
}

function onSubmit() {
  // Get the values from HTML from
  const titleValue = document.getElementById('titleInput').value;
  const authorValue = document.getElementById('authorInput').value;
  const pagesValue = document.getElementById('pagesInput').value;
  const readValue = document.getElementById('readInput').checked;

  // Create the book
  newBook = new Book(titleValue, authorValue, pagesValue, readValue);
  // Add the book to the library
  addBookToLibrary(newBook);
  // Display the library
  emptyTable();
  renderLibrary();
}

// eslint-disable-next-line no-use-before-define
function removeBook(title) {
  myLibrary = myLibrary.filter((book) => book.title !== title);
  SaveLibrary();
}

// eslint-disable-next-line no-use-before-defin
function readStatus(title) {
  const num = myLibrary.length - 1;
  for (let i = 0; i <= num; i += 1) {
    if (myLibrary[i].title === title) {
      if (myLibrary[i].read === true) {
        myLibrary[i].read = false;
      } else {
        myLibrary[i].read = true;
      }
    }
  }
  SaveLibrary();
}
