import React from "react";
import "../todo-item/todoitem.style.css";

export const Todoitem = (props) => (
  <div className="todoitem">
    <h1>{props.description}</h1>
    <h3>{props.date}</h3>
    <button>delete</button>
    <button>update</button>
  </div>
);
