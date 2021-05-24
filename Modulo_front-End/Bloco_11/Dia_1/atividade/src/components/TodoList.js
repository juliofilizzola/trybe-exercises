import TodoForm from "./TodoForms";
import React, { useState } from 'react'


function TodoList() {
  const [todos, settodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  }

  return(
    <div>
      <h1>O Que tem para fazer hoje?</h1>
      <TodoForm onSubmit={addTodo}/>
    </div>
  );
}

export default TodoList