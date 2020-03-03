import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books] = useState([
        {title: 'Her', id: 1},
        {title: 'him', id: 2},
        {title: 'them', id: 3},
    ])
    return (
        <BookContext.Provider value = {{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
