import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'blue', 'pink', 'purple', 'turquoise', 'teal', 'green', 'orange', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * 8)];
    const className = randomColor + '-text'

    return (props) => {
        return (
            <div className = {className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;