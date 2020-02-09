import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
    state = {
        ninjas: [
            {name: 'Suborna', age: 27, haircolor: 'Black', id: 1},
            {name: 'Foysal', age: 28, haircolor: 'Blue', id: 2},
            {name: 'Mikey', age: 23, haircolor: 'blond', id: 3},
        ]
    }
    render() {
        return (
            <div className = "App" >
                <h1> My first React app </h1> 
                <p> Welcome: ) </p> 
                <Ninjas ninjas= { this.state.ninjas }/>
                <AddNinja />
            </div>
        );
    }
}

export default App;