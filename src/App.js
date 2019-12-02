import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const list = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  addTask = newTaskText => {
    const newTask = {
      task: newTaskText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTask]
    })
  }

  toggleItem = id => {
    console.log("This is from the toggleItem function", id);
    this.setState({
      list: this.state.list.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(todo => !todo.completed)
    });
  };


  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList 
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
