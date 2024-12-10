import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { baseURL, getAll } from "./utils/dbUtils";

function Todos({ userId }) {
  const URL = `${baseURL}/todos?userId=${userId}`;
  const [todos, setTodos] = useState([]);

  const TodosStyle = {
    height: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
    border: "2px solid black",
  };

  useEffect(() => {
    const getTodos = () => {
      getAll(URL).then((result) => {
        setTodos(result.data);
      });
    };
    getTodos();
  }, [userId]);

  return (
    <>
      <div style={{ marginTop: "3px" }}>
        <span style={{ marginLeft: "8px" }}>Todos User {userId}</span>
        <button style={{ float: "right", marginRight: "0px" }}>Add</button>
      </div>
      <div style={TodosStyle}>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo}></Todo>
        ))}
      </div>
    </>
  );
}

export default Todos;
