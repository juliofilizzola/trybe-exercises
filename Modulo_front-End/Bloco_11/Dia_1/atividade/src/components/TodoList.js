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


  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )));
  }

const removeTodo = id => {
  const removerArr = [...todos].filter(todo => todo.id !== id)
  setTodos(removerArr)
}

  const completeTodo = id =>{
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplet = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return(
    <div>
      <h1>O Que tem para fazer hoje?</h1>
      <TodoForm onSubmit={addTodo}/>
      < Todo
      todos={todos}
      completeTodo={completeTodo}
      updateTodo={updateTodo}
      removeTodo={removeTodo}
      />
    </div>
  );
}

export default TodoList