import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input className="todo-input" type="text" />
        <button className="todo-btn" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
