// any constants or objects that I might need to reference
const myLibrary = [];
const bookcase = document.querySelector(".bookcase"); 

// example books
const exampleBook1 = new Book("Harry Potter", author = "JK Rowling", pages = 333, readStatus= true); 
const exampleBook2 = new Book("Captain Underpants", author = "Unknown", pages = 100, readStatus = true); 

myLibrary.push(exampleBook1, exampleBook2); 
myLibrary.forEach(displayBook);

// functions


function Book(title, author, pages, readStatus) {
    //constructor that creates the book class
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.readStatus = false;
  }

function displayBook(book){ 

    const div = document.createElement("div");
    const title = document.createElement("p"); 
    const author = document.createElement("p"); 
    const pages = document.createElement("p"); 

    div.classList.add('book-card'); 

    title.innerHTML  = `<span>Title: </span> ${book.title}`;
    author.innerHTML = `<span>Author: </span> ${book.author}`;  
    pages.innerHTML  = `<span>Pages: </span> ${book.pages}`

    div.appendChild(title); 
    div.appendChild(author); 
    div.appendChild(pages); 

    bookcase.appendChild(div); 

}

function addBookToLibrary() {
  //adds a given book to the library
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let numPages = document.querySelector("#num-pages");
  let readStatus = document.querySelector("#read-status");

  newBook = new Book(
    (title = title.value),
    (author = author.value),
    (pages = numPages.value),
    (read = readStatus.value)
  );

  myLibrary.push(newBook);
  displayBook(newBook); 
}

function buttonPress() {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");

  //Opening the dialog modaly
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  //Closing the dialog modaly
  closeButton.addEventListener("click", () => {
    dialog.close();

    addBookToLibrary();
  });
}

buttonPress();
 

