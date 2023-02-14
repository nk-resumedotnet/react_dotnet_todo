import React, { useState, useEffect } from 'react';
import './components/App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    let taskId = uuidv4();
    console.log(todo);
    if (todo) setTodos([...todos, { id: taskId, todo: todo, isDone: false }]);
    setTodo('');
    axios
      .post(`/api/todolist/AddTodoListTask`, {
        TaskId: taskId,
        TaskName: todo,
        IsDone: false,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <span className="heading">Cogent4IT Inc. - ToDo List</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputField>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
