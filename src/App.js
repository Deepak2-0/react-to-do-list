import React, { useState } from "react";
import "./styles.css";

import ToDoItem from "./component/ToDoItem";

export default function App() {
  let keyCount = 1;

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.length === 0) return;

    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function handleDelete(id) {
    setItems((prevItems) => {
      return prevItems.filter((el, index) => {
        return index !== id;
      });
    });
  }

  function handleKeypress(event) {
    // console.log(event.keyCode);

    if (event.keyCode === 13) {
      addItem();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          onKeyDown={handleKeypress}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={keyCount++}
              item={todoItem}
              id={index}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
