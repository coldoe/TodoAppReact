import React, { Component } from "react";
import Moment from "moment";

import "./App.css";

//components
import { Todoitem } from "./Components/todo-item/todoitem.component";
import AddItem from "./Components/addItem/addItem.component";

class App extends Component {
  url = "https://localhost:44367/api/TodoTasks/";

  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }

  //called immidietly after mounting the component
  async componentDidMount() {
    await fetch(this.url)
      .then((res) => res.json())
      .then((todos) => this.setState({ todoList: todos }));
  }

  render() {
    // const todoList = this.state;
    return (
      <div className="App">
        <AddItem></AddItem>

        {this.state.todoList.map((task) => (
          <Todoitem
            key={task.idTodoTask}
            id={task.idTodoTask}
            description={task.taskDescription}
            date={Moment(task.createTime).format("YYYY/MM/DD HH:MM:SS")}
          />
        ))}
      </div>
    );
  }
}

export default App;
