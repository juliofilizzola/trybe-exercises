import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <div className="App">
     <h3>todoList</h3>
     <TodoInput />
     <TodoList />
    </div>
  );
}

export default App;
