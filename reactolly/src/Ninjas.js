import React, { Component} from 'react';
//import App from './App';

class Ninjas extends Component {


    render() {
        const { name, age, haircolor } = this.props;
        return (
            <div className = 'ninja' >
                <div> Name: { name }</div>
                <div> Age: { age } </div>
                <div> Hair Colour: { haircolor } </div>
            </div>
        )
    }
}

export default Ninjas;