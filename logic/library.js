import { addBook, listBooks, editBooks, removeBooks } from './logics.js'

let books = [];

export function mainLogic(choice){
    switch(choice){
        case 1: {
            console.clear();
            books.push(addBook());
            break;
        }
        case 2: {
            console.clear();
            listBooks(books);
            break;
        }
        case 3: {
            console.clear();
            editBooks(books);
            break;
        }
        case 4: {
            console.clear();
            removeBooks(books);
            break;
        }
        case 0: {
            console.clear();
            console.log("Finishing the program...\nThanks for using!");
            break;
        }

        default: {
            console.log("Not an option!");
            break;
        }
    }
}