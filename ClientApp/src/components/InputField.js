import React, { useRef } from 'react';
import './styles.css';

const InputField = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
      <br></br>
    </form>
  );
};

export default InputField;
