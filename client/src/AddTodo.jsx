import { useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { addData, baseURL } from "./utils/dbUtils";

function AddTodo({ userId }) {
  const todoStyle = {
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "2px solid ",
  };
  const URL = `${baseURL}/todos`;
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [todo, setTodo] = useState({
    userId: userId,
    completed: false,
    title: "",
  });
  const handleSubmit = (e) => {
    const newErrors = [];

    e.preventDefault();

    if (todo.title.trim() === "") newErrors.push("title");

    setErrors(newErrors);

    if (newErrors.length > 0) return;
    addData(URL, todo);
    setTodo({ ...todo, title: "" });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <span style={{ marginLeft: "8px" }}>New Todo User- {userId}</span>
      <div style={todoStyle}>
        <br />
        <div>
          <label>Title</label>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value });
            }}
          />
          <br />
          <div
            style={{
              color: "red",
              display: errors.includes("title") ? "block" : "none",
            }}
          >
            <span>Please enter a title for your todo</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            <button type="submit">Add</button>
            <button onClick={() => navigate(`/otherdata/${userId}`)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
