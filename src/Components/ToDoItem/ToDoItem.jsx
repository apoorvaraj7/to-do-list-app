import React, { useState } from "react";
import "../Container/style.css";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleclick() {
    setIsDone(() => {
      return !isDone;
    });
  }

  return (
    <div onClick={handleclick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
