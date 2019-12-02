// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.list.map(todo => {
                <Todo key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default TodoList;
