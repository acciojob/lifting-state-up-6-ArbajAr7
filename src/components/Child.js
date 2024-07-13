import React from 'react';
import PropTypes from 'prop-types';

const Child = props => {
    const {todos, handleComplete} = props;
    console.log(todos);
    return (
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
                {!todo.completed && (
                <button onClick={() => handleComplete(todo.id)}>
                    Complete
                </button>
                )}
            </li>
            ))}
        </ul>
        
    )
}

Child.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

export default Child