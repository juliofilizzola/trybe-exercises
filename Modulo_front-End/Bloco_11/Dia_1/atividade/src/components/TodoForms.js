import React from 'react';

const TodoForm = () => {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();

    setInput('');
  };

  return(
    <form className = 'todo-form' onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='Adicionando a Lista'
      value={input}
      name='text'
      className='todo-input'
      />
      <button className='todo-button'>Adiconar a lista</button>
    </form>
  )
}

export default TodoForm;
