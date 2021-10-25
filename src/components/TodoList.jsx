// Import Components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  // Delete a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Update todo status
  const updateTodoStatus = (id) => {
    let updatedTodos = todos.map((element) => {
      element.id === id && (element.completed = !element.completed);
      return element;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            onDelete={handleDelete}
            onUpdate={updateTodoStatus}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
