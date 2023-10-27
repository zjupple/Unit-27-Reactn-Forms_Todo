import React, { useState } from "react";
import { useImmer } from "use-immer";
import { v4 as uuid} from "uuid"
import './NewTodoForm.css';

function NewTodoForm({ createTodo }) {
  const [todo, setTodo] = useImmer("");

  

  

  return (                 
    <div>
      {/* Prefer inline function call to reduce the amount of back and forth when debugging */}
      <form onSubmit={(e) => {
        e.preventDefault();
        createTodo({ todo, id: uuid() });
        setTodo("");
      }}
      >
        <label htmlFor="todo">Task:</label>
        <input
          id="todo"
          name="todo"
          type="text"
          onChange={e => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
        <button className="toDoButton">Add a todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
