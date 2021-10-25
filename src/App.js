import { useState } from "react";
import "./App.css";
// Import Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // Insert todos on form submission
  const handleSubmit = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <header>Todo List</header>
      <Form onSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
