import React from 'react';
//import App from './App';

const Ninjas = ({ninjas}) => {
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className = 'ninja' key = {ninja.id} >
                <div> Name: { ninja.name }</div>
                <div> Age: { ninja.age } </div>
                <div> Hair Colour: { ninja.haircolor } </div>
            </div>
        )
    })
    return (
        <div className = 'ninja-list'>
            { ninjaList }
        </div>
    )
}

export default Ninjas;