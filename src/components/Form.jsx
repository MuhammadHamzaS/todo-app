import { useState } from "react";
import {v4 as randomId} from 'uuid';

const Form = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");
  let  todoId = randomId(); // Generate random id for todo

  //   Getting form input value and set new
  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  //   Create a todo on form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      text: todo,
      completed: false,
      id: todoId,
    });
    setTodo("");
  };

  return (
    <div>
      <form>
        <input
          value={todo}
          onChange={handleInput}
          className="todo-input"
          type="text"
        />
        <button onClick={handleFormSubmit} className="todo-btn" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
