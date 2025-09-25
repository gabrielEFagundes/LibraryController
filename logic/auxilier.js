export function verifyTitle(title, books = []){
    return books.filter((number, index, books) => {
        return books[index].book.title == title;
    })
}