import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { fetchTodos, addTodo, deleteTodo, clearTodos } from "./api/task";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const loadTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const sendTodos = async (data) => {
    try {
      await addTodo(data); 
      loadTodos();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (index) => {
    const todoId = todos[index].label; 
    try {
      await deleteTodo(todoId); 
      loadTodos();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleClear = async () => {
    try {
      await clearTodos();
      loadTodos();
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="container">
      <h1>My Todos:</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                const todoObject = { label: inputValue, done: false };
                await sendTodos(todoObject); 
                setInputValue("");
              }
            }}
            placeholder="What do you need to do? "
          />
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="todo-item">
              <span>{todo.label}</span>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "#ffffff" }}
                onClick={() => handleDelete(index)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="task">{todos.length} task</div>
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
};

export default App;
