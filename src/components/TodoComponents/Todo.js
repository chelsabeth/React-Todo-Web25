// is a component that takes in the todo data and displays the task to the screen

import React from "react";

const Todo = props => {
  return (
    <div
      className={`${props.todo.completed ? "completed" : ""}`}
      onClick={() => props.toggleItem(props.todo.id)}
    >
      <p>{props.todo.task}</p>
      <hr/>
    </div>
  );
};

export default Todo;
