import React, { useState } from "react";
import { v4 } from "uuid";

function TodoForm({ addTodos }) {
  const [todoString, setTodoString] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please Fill Something");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);
    setTodoString("");
  };
  return (
    <div>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter a Todo"
        value={todoString}
        onChange={(e) => setTodoString(e.target.value)}
      />
      <button onClick={handleSubmit} color="success">
        Add Todo
      </button>
    </div>
  );
}
export default TodoForm;
