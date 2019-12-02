// is a component that takes in the todo data and displays the task to the screen

import React from "react";

const Todo = props => {
    return (
        <div className={`todo${props.todo.purchased ? "purchased" : ""}`}>
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;