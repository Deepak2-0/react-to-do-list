import React, { useState } from "react";

function ToDoItem(props) {
  const { id, item, onDelete } = props;

  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="list">
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {item}
      </li>
      <div className="comboButton">
        <button className="doneButton " onClick={handleClick}>
          <i className="fas fa-check-square"></i>
        </button>
        <button className="deleteButton" onClick={() => onDelete(id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
