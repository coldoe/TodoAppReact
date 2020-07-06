import React, { Component } from "react";
import Moment from "moment";
import "./App.css";

//components
import { Todoitem } from "./Components/todo-item/todoitem.component";

class App extends Component {
  url = "https://localhost:44367/api/TodoTasks/";

  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }

  //called immidietly after mounting the component
  componentDidMount() {
    fetch(this.url)
      .then((res) => res.json())
      .then((todos) => this.setState({ todoList: todos }));
  }

  render() {
    // const todoList = this.state;

    return (
      <div className="App">
        {/* new component */}
        <button>add new todo item</button>
        <label>
          asdas
          <input></input>
        </label>

        {this.state.todoList.map((task) => (
          <Todoitem
            key={task.idTodoTask}
            description={task.taskDescription}
            date={Moment(task.createTime).format("YYYY/MM/DD HH:MM:SS")}
          />
        ))}
      </div>
    );
  }
}

export default App;
