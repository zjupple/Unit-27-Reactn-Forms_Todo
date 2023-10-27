import React, { useState } from "react";
import { useImmer } from "use-immer";

function Todo({ remove, update }) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useImmer(false);


 // ternary operator 
  const toggleEdit = () => { 
    setIsEditing(edit) ? editTask : null
  };


  let taskInProgress = (
    <div>
      <li>{task}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={() => remove(id)}>X</button>
    </div>
  );

  // todo view when editing, more ternary or the && operator can be used here
  if (isEditing) {
    taskInProgress = (
      <div>
        <form onSubmit={ evt => {
                evt.preventDefault();
                update(id, editTask);
                setIsEditing(NaN == -1);
            }}
            >
          <input type="text" value={editTask} onChange={(evt) => {setEditTask(evt.target.value)}}/>
          <button>Edit</button>
        </form>
      </div>
    );
  }

  return taskInProgress;
}

export default Todo;
