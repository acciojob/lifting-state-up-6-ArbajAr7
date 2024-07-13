
import React, {useState} from "react";
import './../styles/App.css';
import '../styles/Child.css';
import Child from "./Child";



const App = () => {
  const [todos , setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false},
    { id: 2, text: 'Build a React app', completed: false},
    { id: 3, text: 'Deploy the React app', completed: false},
  ]);
  console.log(todos);
  const handleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <h3>Child Component</h3>
      <Child todos = {todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
