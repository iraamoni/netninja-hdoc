import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h1>
                        Context App
                    </h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;

