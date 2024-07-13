import React from 'react';
 
const Child = ({ todos, onTodoComplete }) => {
  return (
    <div className='child'>
        
        <ul>
        <h2>Child Component</h2>
        {todos.map(todo => (
            <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            {!todo.completed && <button onClick={() => onTodoComplete(todo.id)}>Complete</button>}
            </li>
        ))}
        </ul>
    </div>
  );
};
 
export default Child;