const open = document.getElementById('openDialog');
const dialog = document.getElementById('dialog');
const tittle = document.getElementById('tittle');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const output = document.getElementById('output');
const cancel = document.getElementById('cancel').addEventListener('click',() => { dialog.close();} )
open.addEventListener('click', () => { dialog.showModal();} );



const myLibrary = [];


const form = document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary(tittle.value,author.value,pages.value);
  tittle.value = '';
  author.value = '';
  pages.value = "";
  dialog.close();
})

function Book(tittle, author, pages, status="not read") {
  this.tittle = tittle;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
function addBookToLibrary(tittle, author, pages) {
  const book = new Book(tittle, author, pages);
  myLibrary.push(book);
  displayBook();
}
function displayBook() {
  output.innerHTML = '';
  myLibrary.forEach((item, index) => { output.innerHTML += `<div class="book"><span>Title:${item.tittle}</span><span>Author:${item.author}</span><span> Pages:${item.pages}</span><span>Status: ${item.status}</span><span class="btn"><a class="remove" data-index="${index}" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></a><button onclick="myLibrary[${index}].stat(); displayBook()">Status</button></span></div>`
})
remove();
}

function remove() {
  document.querySelectorAll('.remove').forEach((button)=> { button.onclick = (event) => {
    const index = Number(event.target.getAttribute('data-index'));
    myLibrary.splice(index, 1);
    displayBook();
  }
  })
} Book.prototype.stat = function() {
 if (this.status === 'not read') {
  this.status = 'read'
 } else if (this.status === 'read') {
this.status = 'not read'
 } 
 }
 
 





