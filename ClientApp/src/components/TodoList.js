import React from 'react';
import './styles.css';
import SingleTodo from './SingleTodo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          ></SingleTodo>
        ))
      ) : (
        <span>
          <strong>No task found.</strong>
        </span>
      )}
    </div>
  );
};

export default TodoList;
