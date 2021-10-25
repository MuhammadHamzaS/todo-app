
const Todo = ({todo, onDelete}) => {
  return (
    <div className="todo">
      <li className="todo-item">{todo.text}</li>
      <button className="complete-btn ">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => onDelete(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
