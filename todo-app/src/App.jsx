import React, { useState , useEffect} from 'react'
import './App.css'
import Form from './components/form'
import TodoList from './components/TodoList'
function App() { 
  
  //states
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);   
  
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }

    };
    filterHandler();
  }, [todos, status, setFilteredTodos]);
  
  return (
      <div className="App">
      <header>
          <h1>R's Todo List</h1>
      </header>
      <Form setStatus={setStatus} status={status} todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
      </div>
      
  );
}

export default App;