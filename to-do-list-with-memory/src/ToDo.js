import React, { Component } from "react";

class ToDo extends Component {
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button>Edit</button>
        <button>x</button>
      </div>
    );
  }
}

export default ToDo;
