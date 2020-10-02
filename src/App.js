import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Button, Table } from 'reactstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">To doリスト</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}/>
      </Container>
    </div>
  );
}

export default App;
