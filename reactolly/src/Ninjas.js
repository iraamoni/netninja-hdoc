import React from 'react';
import App from './App';
import './Ninjas.css'

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 24) {
            return (
                <div className = 'ninja' key = {ninja.id} >
                    <div> Name: { ninja.name }</div>
                    <div> Age: { ninja.age } </div>
                    <div> Hair Colour: { ninja.haircolor } </div>
                    <button onClick = {() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>
            )
        } else {
            return null
        }
    })
    return (
        <div className = 'ninja-list'>
            { ninjaList }
        </div>
    )
}

export default Ninjas;

// ternary operator example

// const Ninjas = ({ninjas}) => {
//     const ninjaList = ninjas.map(ninja => {
//         return ninja.age > 25 ? (
//             <div className = 'ninja' key = {ninja.id} >
//                 <div> Name: { ninja.name }</div>
//                 <div> Age: { ninja.age } </div>
//                 <div> Hair Colour: { ninja.haircolor } </div>
//             </div>
//         ) : null;
//     });
//     return (
//         <div className = 'ninja-list'>
//             { ninjaList }
//         </div>
//     )
// }

// export default Ninjas;

