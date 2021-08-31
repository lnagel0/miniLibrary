class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '0',
        read = 'Unknown'
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        this.books.push(newBook);
    }
}

const library1 = new Library();
const book1 = new Book('Hobbit', 'Tolkien', '321', 'Yes');
const book2 = new Book('Juramentada', 'Sanderson', '1400', 'No');
const book3 = new Book('A Clockwork Orange', 'Robin Williams', '420', 'Yes');
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);

const content = document.querySelector('#content');
const addBookBtn = document.getElementById('addBookBtn');

addBookBtn.onclick = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('didRead').value;

    library1.addBook(new Book(title, author, pages, isRead));

    const newTitle = document.createElement('span');
    const newAuthor = document.createElement('span');
    const newPages = document.createElement('span');
    const newRead = document.createElement('span');

    newTitle.innerHTML = title;
    newAuthor.innerHTML = author;
    newPages.innerHTML = pages;
    newRead.innerHTML = isRead;

    content.appendChild(newTitle);
    content.appendChild(newAuthor);
    content.appendChild(newPages);
    content.appendChild(newRead);
}

for (let i = 0; i < library1.books.length; i++){
    const newTitle = document.createElement('span');
    const newAuthor = document.createElement('span');
    const newPages = document.createElement('span');
    const newRead = document.createElement('span');

    newTitle.innerHTML = library1.books[i].title;
    newAuthor.innerHTML = library1.books[i].author;
    newPages.innerHTML = library1.books[i].pages;
    newRead.innerHTML = library1.books[i].read;

    content.appendChild(newTitle);
    content.appendChild(newAuthor);
    content.appendChild(newPages);
    content.appendChild(newRead);
}