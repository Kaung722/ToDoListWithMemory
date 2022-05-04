import React, { Component } from "react";

class ToDo extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.task}
          <button>Edit</button>
          <button>x</button>
        </li>
      </div>
    );
  }
}

export default ToDo;
