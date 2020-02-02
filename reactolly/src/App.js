import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <h1> My first React app </h1> 
                <p> Welcome: ) </p> 
                <Ninjas name = 'Suborna' age = '25' haircolor = 'Black'/>
            </div>
        );
    }
}

export default App;