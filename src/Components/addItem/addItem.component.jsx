import React, { Component } from "react";
import "../addItem/addItem.style.css";

class AddItem extends Component {
  url = "https://localhost:44367/api/TodoTasks/";

  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  render() {
    // // const todoList = this.state;
    // const { todo } = this.state;

    return (
      <div className="AddItem">
        <label>
          Add New Todo
          <input
            type="text"
            onChange={(e) => this.setState({ todo: e.target.value })}
          ></input>
        </label>
        <div>
          <button onClick={() => console.log(this.state.todo)}>
            add new todo item
          </button>
        </div>
      </div>
    );
  }
}

function sendTodo() {}

export default AddItem;
