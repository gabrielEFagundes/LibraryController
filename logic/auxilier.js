export function filterByTitle(title, books){
    let bookTitle = books.filter(function(index){
        return index.book.title == title;
    })

    return bookTitle;
}

export function filterDisponibleBooks(books){
    let filteredBooks = books.filter(function(index){
        return index.book.isDisponible;
    })

    return filteredBooks;
}

export function filterByAuthor(books, author){
    let authors = books.filter(function(index){
        return index.book.author.toLowerCase() == author; // later add a filter where you don't have to type the entire author's name!
    })

    return authors;
}