import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // add a new todo
  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  // update a todo with updatedTask
  // for loop with alert of non edited task here
  const update = (id, updatedTask) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  // delete a todo by id
  // can use a for loop with condition here
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };


  // can use props here

  const todoComponents = todos.map(todo => (
    <Todo
      remove={remove}
      key={todo.id}
      id={todo.id}
      task={todo.task}
      update={update}
    />
  ));

  // prop created too pass down into newtodo form

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <ul>{todoComponents}</ul>
    </div>
  );
}

export default TodoList;
