// will hold your input field and your Add Todo and Clear Completed buttons
    // Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list
    // Once a todo is submitted, the Todo List should re-render and show the added todo

    import React from "react";

    class TodoForm extends React.Component {
        constructor() {
            super();
            this.state = {
                newTask: ""
            };
        }

        handleChanges = e => {
            this.setState({
                newTask: e.target.value
            });
        };

        handleSubmit = e => {
            e.preventDefault();
            this.props.addTask(this.state.newTask);
            this.setState({
                newTask: ""
            });
        };

        render() {
            console.log("rendering form")
            return (
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="todo"
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    />
                    <button>Add Task</button>
                </form>
            )
        }
    }

    export default TodoForm;