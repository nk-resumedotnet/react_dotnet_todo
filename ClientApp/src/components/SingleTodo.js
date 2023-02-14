import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';
import axios from 'axios';

const SingleTodo = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    axios
      .post(`http://localhost:5217/api/todolist/DeleteTodoListTask`, {
        TaskId: id,
        TaskName: '',
        IsDone: false,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    let editValue = editTodo;
    setEdit(false);
    axios
      .post(`http://localhost:5217/api/todolist/UpdateTodoListTask`, {
        TaskId: todo.id,
        TaskName: editValue,
        IsDone: todo.isDone,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="todos__single--text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        ></input>
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit></AiFillEdit>
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete></AiFillDelete>
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone></MdDone>
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
