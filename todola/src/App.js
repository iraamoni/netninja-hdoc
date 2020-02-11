import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'milk'},
            {id: 2, content: 'Potato'},
            {id: 3, content: 'Coconut'},
            {id: 4, content: 'Chocolate'},
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
                <h4 className = 'center white-text card-panel teal lighten-1 z-depth-1'>Todola</h4> 
                <Todos todos = { this.state.todos } deleteTodo = {this.deleteTodo} />
                <AddTodo /> 
            </div>
        );
    }
}

export default App
