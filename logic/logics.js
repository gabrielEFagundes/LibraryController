import promptSync from 'prompt-sync';
import { filterDisponibleBooks, filterByAuthor, filterByTitle } from './auxilier.js';

const prompt = promptSync()

let id = 0;

export function mainMenu(){
    console.log("\n===== LIBRARY ====="     +
        "\n1- Add Books"                    +
        "\n2- List Books"                   +
        "\n3- Edit Books"                   +
        "\n4- Remove Books"                 +
        "\n0- Exit \n"
    )

    return parseInt(prompt("-> "))
}

export function addBook(){
    id++;

    console.log("\nName of the book");
    let bookName = prompt("-> ");

    console.log("\nBook's author");
    let bookAuthor = prompt("-> ");

    console.log("\nPublish Year");
    let bookYear = parseInt(prompt("-> "));

    console.log("\nBook's genre");
    let bookGenre = prompt("-> ");

    console.log("\nProgram will assume the book is disponible. You can change that later.");

    return {
        id: id,
        book: {
            title: bookName,
            author: bookAuthor,
            publishYear: bookYear,
            genre: bookGenre,
            isDisponible: true
        }
    }
}

export function listBooks(books){
    console.log("\nHow would you like to list the books?"   +
        "\n1- List All"                                     +
        "\n2- Search By Title"                              +
        "\n3- Filter By Disponible Books"                   +
        "\n4- Search By Author"
    )
    let choice = parseInt(prompt("-> "));

    switch(choice){
        case 1: {
            allBooks(books);
            break;
        }
        case 2: {
            console.log("\nWhat's the title of the book?");
            let bookName = prompt("-> ");

            allBooks(filterByTitle(books, bookName));
            break;
        }
        case 3: {
            allBooks(filterDisponibleBooks(books));
            break;
        }
        case 4: {
            console.log("\nWhat's the name of the author?");
            let authorName = prompt("-> ").toLowerCase();

            allBooks(filterByAuthor(books, authorName));
        }
    }
}

function allBooks(books){
    console.log("\n");
    books.forEach((number, index, books) => {
        console.log(`${books[index].id} ............... ${books[index].book.title} - By ${books[index].book.author} ON ${books[index].book.publishYear} -- Disponible? ${books[index].book.isDisponible} `);
    })
}

export function editBooks(books=[]){
    allBooks(books);

    console.log("\nWhat ID?");
    let id = parseInt(prompt("-> "));

    console.log("\nWhat'd you like to edit?"    +
        "\n1- Title"                            +
        "\n2- Author"                           +
        "\n3- Publish Year"                     +
        "\n4- Genre"                            +
        "\n5- Disponibility\n"
    );
    let choice = parseInt(prompt("-> "));

    let bookIndex = books.findIndex(function(index) {
        return index.id == id;
    })

    switch(choice){
        case 1: {
            console.log("What title would you like?");
            books[bookIndex].book.title = prompt("-> ");
            break;
        }
        case 2: {
            console.log("Which author would you like?");
            books[bookIndex].book.author = prompt("-> ");
            break;
        }
        case 3: {
            console.log("What publish year would you like?");
            books[bookIndex].book.publishYear = parseInt(prompt("-> "));
            break;
        }
        case 4: {
            console.log("What genre would you like?");
            books[bookIndex].book.genre = prompt("-> ");
            break;
        }
        case 5: {
            let disponible = books[bookIndex].book.isDisponible ? false : true;
            books[bookIndex].book.isDisponible = disponible;
            break;
        }

        default: {
            console.log("Not an option!");
            break;
        }
    }
}

export function removeBooks(books = []){
    allBooks(books);

    console.log("\nWhich book ID would you like to remove?");
    let id = prompt("-> ");

    let index = books.findIndex(function(index){
        return index.id == id;
    })

    if(index != -1){
        books.splice(index);
        return;
    }
    console.log("Couldn't find the book!");
}