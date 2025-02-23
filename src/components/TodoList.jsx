import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a project",
    "Have fun",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 Todo List</h2>

      {/* Input & Add Button */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          ➕ Add
        </button>
      </div>

      {/* Todo Items */}
      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            {todo}
            <button
              onClick={() => removeTodo(index)}
              style={styles.deleteButton}
            >
              ✖ {/* Unicode 'X' that can be styled */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Modern Styling
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "50px auto",
  },
  heading: {
    color: "#007bff",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    flex: 1,
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "white",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white", // Now ✖ is white
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default TodoList;
