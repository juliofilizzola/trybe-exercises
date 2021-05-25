import TodoForm from "./TodoForms";
import React, { useState } from 'react'
import Todo from "./Todo";



function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

const removeTodo = id => {
  const removerArray = [...todos].filter(todo => todo.id !== id)
  setTodos(removerArray)
}

  const completeTodo = id =>{
    let updatedTodos = todos.map(todo => {
      if (todo.id = id) {
        todo.isComplet = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return(
    <div>
      <h1>O Que tem para fazer hoje?</h1>
      <TodoForm onSubmit={addTodo}/>
      < Todo
      todos={todos} completeTodo={completeTodo}
      />
    </div>
  );
}

export default TodoList