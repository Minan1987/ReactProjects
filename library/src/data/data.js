let books = [
    {
        number: 1,
        name: "مخزن الاسرار",
        amount: "75000",
        due: "1399/01/12"
    },
    {
        number: 2,
        name: "شاهنامه",
        amount: "105000",
        due: "1360/06/22"
    },
    {
        number: 3,
        name: "بادبادک ها",
        amount: "121000",
        due: "1395/09/10"
    },
    {
        number: 4,
        name: "جادوی زندگی",
        amount: "56000",
        due: "1377/02/13"
    },
    {
        number: 5,
        name: "بازی زندگی",
        amount: "56000",
        due: "1377/02/13"
    },
]

export const getBooks = () => {
    return books;
}
export const getBook = (number) => {
    return books.find(book => book.number === number)
}
export const deleteBook = number => {
    books = books.filter(book => book.number !== number)
}