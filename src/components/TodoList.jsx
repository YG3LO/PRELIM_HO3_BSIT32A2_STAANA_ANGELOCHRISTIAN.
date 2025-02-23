import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a project",
    "Have fun",
  ]);

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Todo List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "10px" }}>
            {todo}
            <button
              onClick={() => removeTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
