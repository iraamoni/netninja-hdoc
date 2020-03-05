import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>
                Bookē
            </h1>
            <p>
                Currently, you have  <strong>{ books.length } {books.length > 1 ? 'books' : 'book'} </strong> to get through!
            </p>
        </div>
    );
}

export default Navbar;

