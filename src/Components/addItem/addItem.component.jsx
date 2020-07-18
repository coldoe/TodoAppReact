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

  async sendTodo() {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ TaskDescription: this.state.todo }),
    };

    await fetch(this.url, reqOptions)
      .then((res) => res.json())
      .then((text) => console.log(text));
  }

  render() {
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
          <button onClick={() => this.sendTodo()}>add new todo item</button>
        </div>
      </div>
    );
  }
}

export default AddItem;
