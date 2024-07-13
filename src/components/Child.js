import React from 'react';
import PropTypes from 'prop-types';

const Child = props => {
    const {todos, onComplete} = props;
    console.log(todos);
    return (
        <div>
            {todos.map((item) => (
                <div key={item.id}>
                    <ul>
                        <li>
                            <div className='abcd'>
                                <p>{item.text}</p>
                                {item.completed ? (
                                    <p></p>
                                    ) : (
                                    <button onClick={() => onComplete(item.id)}>Complete</button>
                                )}
                            </div>
                        </li>
                    </ul>
                    

            </div>
            ))}
        </div>
        
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