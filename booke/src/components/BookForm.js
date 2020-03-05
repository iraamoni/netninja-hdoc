import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit =  (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    return (
        <div>
            <form onSubmit = { handleSubmit }>
                <h1 className='form-enter-title'>
                    Add a new book
                </h1>
                <input
                    type="text"
                    placeholder = 'Enter the book name'
                    value = { title }
                    onChange = {(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder = 'Enter the book author'
                    value = { author }
                    onChange = {(e) => setAuthor(e.target.value)}
                    required
                />
                <input
                    type="submit"
                    value = 'Add Book'
                />
            </form>
        </div>
    );
}

export default BookForm;
