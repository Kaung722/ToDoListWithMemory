import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: ["LEE", "LEE", "Larr", "Larr"] };
    this.create = this.create.bind(this);
  }

  create(newToDo) {
    this.setState({
      todos: [...this.state.todos, newToDo],
    });
  }

  render() {
    const todos = this.state.todos.map((task, index) => {
      return <ToDo task={task} />;
    });
    return (
      <div>
        <h1>ToDo List</h1>
        <ToDoForm createToDo={this.create} />
        <ol>{todos}</ol>
      </div>
    );
  }
}

export default ToDoList;
