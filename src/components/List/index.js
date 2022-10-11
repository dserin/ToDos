import React from "react";

function List({ todos, setTodos, hide }) {
  const checkTodo = (e) => {
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(e.target.id)) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (e) => {
    setTodos(
      todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
    );
  };

  const isComplated = (e) => {
    if (e.checked === true && hide === "All") {
      return "completed";
    } else if (e.checked === true && hide === "Active") {
      return "completed hidden";
    } else if (e.checked === false && hide === "Completed") {
      return "hidden";
    }
  };

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id} className={isComplated(todo)}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.checked}
                id={todo.id}
                onClick={checkTodo}
              />
              <label>{todo.todo}</label>
              <button
                className="destroy"
                id={todo.id}
                onClick={deleteTodo}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
