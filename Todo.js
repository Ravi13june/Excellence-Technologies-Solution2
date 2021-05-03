import React from "react";

function Todo({ todos }) {
  return (
    <center>
      <div>
        {todos.map((todo) => (
          <h2 key={todo.id}>{todo.todoString}</h2>
        ))}
      </div>
    </center>
  );
}
export default Todo;
