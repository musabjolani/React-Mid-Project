import { useEffect, useState } from "react";
import "./App.css";
import { baseURL, updateById } from "./utils/dbUtils";

function Todo({ todo, updateTodo }) {
  const labelWidth = "85px";
  const URL = `${baseURL}/todos/${todo._id}`;
  const [task, setTask] = useState({});

  useEffect(() => {
    setTask(todo);
  }, []);

  return (
    Object.keys(task).length > 0 && (
      <div
        style={{
          width: "80%",
          border: "1.5px solid purple",
          marginTop: "12px",
        }}
      >
        <label style={{ display: "inline-block", width: labelWidth }}>
          Title:
        </label>
        <span className="tooltip">
          {task.title.slice(0, 18) + "..."}
          <span className="tooltiptext">{task.title}</span>
        </span>
        <div style={{ display: "inline-block", width: "100%" }}>
          <label style={{ display: "inline-block", width: labelWidth }}>
            Completed:{" "}
          </label>
          <span>{task.completed ? "True" : "False"}</span>
          <button
            style={{
              float: "right",
              visibility: task.completed ? "hidden" : "visible",
            }}
            onClick={() => {
              updateById(URL, { completed: true });
              setTask({ ...task, completed: true });
              updateTodo(task.userId, task._id, { ...task, completed: true });
            }}
          >
            Mark Completed
          </button>
        </div>
      </div>
    )
  );
}

export default Todo;
