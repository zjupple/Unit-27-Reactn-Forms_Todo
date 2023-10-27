import React, { useState } from "react";
import { useImmer } from "use-immer";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useImmer([]);

  // add a new todo
  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  // update a todo with updatedTask
  // for loop with alert of non edited task here
  // still modifying this variable to benefit changes like adding an alert on edit
  const modifyTodo = (id, editTask) => {
    setTodos(todos =>
      todos.push(todo =>
        todo.id === id ? {task: editTask, ...todo} : todo
      )
    );
  };

  // delete a todo by id
  // can use a for loop with condition here
  const remove = id => {
    let arrayTodo = [];
    for (let todo of todos) {
        if( todo.id !== id ) {
            arrayTodo.push(todo)
        }
    }
    return setTodos(arrayTodo);
  };


  // can use props here

  const todoFeatures = todos.map(props => (
    <Todo
      remove={remove}
      key={props.id}
      id={props.id}
      task={props.task}
      update={modifyTodo}
    />
  ));

  // prop created too pass down into newtodo form

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <ul>{todoFeatures}</ul>
    </div>
  );
}

export default TodoList;
