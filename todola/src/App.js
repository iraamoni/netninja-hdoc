import React, { Component } from 'react'
import Todos from './Todos'

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'milk'},
            {id: 2, content: 'Potato'},
            {id: 3, content: 'Coconut'},
            {id: 4, content: 'Chocolate'}
        ]
    }

    deleteTodo = (id) => {
        
        const todos = this.state.todos.filter(todo => {
            return todo.id != id;
        });

        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className = 'todo-app container'>
                <h1 className = 'center blue-text'>Todo's</h1> 
                <Todos todos = { this.state.todos } deleteTodo = {this.deleteTodo} />
            </div>
        );
    }
}

export default App
