import React, { useState } from "react";
//styles,bootstrap
import "../todo-item/todoitem.style.css";
import { Button } from "react-bootstrap";

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
      <Button
        variant="danger"
        type="submit"
        onClick={() => deleteTodo(props.id)}
      >
        Delete
      </Button>
    </div>
  ) : null;
};
