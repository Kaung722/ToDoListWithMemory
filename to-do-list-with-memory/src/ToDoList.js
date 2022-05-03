import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  render() {
    return (
      <div>
        <ul></ul>
      </div>
    );
  }
}

export default ToDoList;
