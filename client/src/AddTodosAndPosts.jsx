import { useOutletContext } from "react-router-dom";
import AddTodo from "./AddTodo";
import "./App.css";
import Posts from "./Posts";

function AddTodosAndPosts() {
  const userId = useOutletContext();
  return (
    <div style={{ marginTop: "15px" }}>
      <AddTodo userId={userId}></AddTodo>
      <Posts userId={userId}></Posts>
    </div>
  );
}

export default AddTodosAndPosts;
