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
const book1 = new Book('Hobbit', 'J. R. R. Tolkien', '285', 'Yes');
const book2 = new Book('Oathbringer', 'B. Sanderson', '1400', 'Yes');
const book3 = new Book('A Clockwork Orange', 'A. Burgess', '192', 'No');
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);

const content = document.querySelector('#content');
const addBookBtn = document.getElementById('addBookBtn');

let counter = 3;

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
    const newButton = document.createElement('button');

    newTitle.innerHTML = title;
    newAuthor.innerHTML = author;
    newPages.innerHTML = pages;
    newRead.innerHTML = isRead;

    newButton.id = 'bookN' + counter;
    newButton.classList.add('rmvBtns');
    newButton.classList.add('hvr-ripple-out');

    content.appendChild(newTitle);
    content.appendChild(newAuthor);
    content.appendChild(newPages);
    content.appendChild(newRead);
    content.appendChild(newButton);

    counter += 1;

    newButton.onclick = () => {
        newTitle.remove();
        newAuthor.remove();
        newPages.remove();
        newRead.remove();
        newButton.remove();
    }
    
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('didRead').value = 'No';
}

for (let i = 0; i < library1.books.length; i++){
    const newTitle = document.createElement('span');
    const newAuthor = document.createElement('span');
    const newPages = document.createElement('span');
    const newRead = document.createElement('span');
    const newButton = document.createElement('button');

    newTitle.innerHTML = library1.books[i].title;
    newAuthor.innerHTML = library1.books[i].author;
    newPages.innerHTML = library1.books[i].pages;
    newRead.innerHTML = library1.books[i].read;

    newButton.id = 'bookN' + i;
    newButton.classList.add('rmvBtns');
    newButton.classList.add('hvr-ripple-out');

    content.appendChild(newTitle);
    content.appendChild(newAuthor);
    content.appendChild(newPages);
    content.appendChild(newRead);
    content.appendChild(newButton);

    newButton.onclick = () => {
        newTitle.remove();
        newAuthor.remove();
        newPages.remove();
        newRead.remove();
        newButton.remove();
    }
}

