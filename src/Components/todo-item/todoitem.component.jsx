import React, { useState } from "react";
import "../todo-item/todoitem.style.css";

export const Todoitem = (props) => {
  const url = "https://localhost:44367/api/TodoTasks/";
  const [visible, setVisible] = useState(true);

  async function deleteTodo(id) {
    const reqOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idTodoTask: id }),
    };

    await fetch(url + id, reqOptions)
      .then((res) => res.json())
      .then((text) => console.log(text));

    checkStyle();
  }

  function checkStyle() {
    visible ? setVisible(false) : setVisible(true);
  }

  return visible ? (
    <div className="todoitem">
      <h1>{props.description}</h1>
      <h3>{props.date}</h3>
      <button onClick={() => deleteTodo(props.id)}>delete</button>
    </div>
  ) : null;
};
