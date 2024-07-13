import React, { Component } from 'react';
import Child from './Child';
 
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false },
        { id: 3, text: 'Deploy the project', completed: false }
      ]
    };
  }
 
  markTodoAsCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      )
    }));
  }
 
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child todos={this.state.todos} onTodoComplete={this.markTodoAsCompleted} />
      </div>
    );
  }
}
export default Parent;