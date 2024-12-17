import { useParams } from "react-router-dom";
import AddTodo from "./AddTodo";
import "./App.css";
import Posts from "./Posts";

function AddTodosAndPosts({ AddTodoToUser }) {
  const { userId } = useParams();
  return (
    <div style={{ marginTop: "15px" }}>
      <AddTodo userId={userId} AddTodoToUser={AddTodoToUser}></AddTodo>
      <Posts userId={userId}></Posts>
    </div>
  );
}

export default AddTodosAndPosts;
