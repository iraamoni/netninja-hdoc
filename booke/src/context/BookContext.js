import React, { useState, createContext } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {
            title: 'Dune',
            author: 'Frank Herbert',
            id: 1
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            id: 2
        },
        {
            title: 'In Search of Lost Time',
            author: 'Marcel Proust',
            id: 3
        },
    ])

    const addBook = (title, author) => {
        console.log(title, author);
        const newBookList = [...books, {title: title, author:author, id: uuidv1()}];
        console.log(newBookList);
        setBooks(newBookList);
    }

    const removeBook = (id) => {
        const removeEachBook = books.filter(book => book.id !== id);
        setBooks(removeEachBook)
        console.log(removeEachBook)
    }

    return (
        <BookContext.Provider value = {{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;
