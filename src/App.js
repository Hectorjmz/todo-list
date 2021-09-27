import postIt from './postPic.png';
import './App.css';
import React from 'react';
import { useState } from 'react';
import TodoForm from './form'
import Todo from './todo.js'
import { Container, Button, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build todo app',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text: text, isCompleted: false}]
    setTodos(newTodos)
  }

  const removeTodo = index => {
    let temp = [...todos]
    temp.splice(index, 1)
    setTodos(temp)
  }



  return (
  <>
      <div className="App">
      <Container>
        {todos.map((todo, i) => 
        <Todo className='stuff' index={i} key={i} todo={todo} remove={removeTodo} />)}
        <TodoForm className='stuff' addTodo={addTodo} />
        <img src={postIt} className="position-absolute top-0 start-0" alt="logo" />
      </Container>
      </div>
  </>
  );
}

export default App;
