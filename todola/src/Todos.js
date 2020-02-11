import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map((todo) => {
            return (
                <li  key = { todo.id } onClick = { () => {deleteTodo(todo.id)} } className="collection-item">{todo.content}</li>
            )
        })
    ) : (
        <p className = 'center'>You have no todo left!</p>
    )
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Things to do</h4></li>
                { todoList }
            </ul>
        </div>
    )
}

export default Todos;