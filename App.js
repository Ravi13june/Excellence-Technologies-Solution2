import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localTodos });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);
  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <center>
      <h1 className="text-white">My Todo </h1>
      <Todo todos={todos} />
      <TodoForm addTodos={addTodos} />
    </center>
  );
}
export default App;
