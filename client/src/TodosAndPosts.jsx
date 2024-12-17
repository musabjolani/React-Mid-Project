import { useParams } from "react-router-dom";
import "./App.css";
import Posts from "./Posts";
import Todos from "./Todos";

function TodosAndPosts({ updateTodo }) {
  const { userId } = useParams();
  return (
    userId !== 0 && (
      <div style={{ marginTop: "15px" }}>
        <Todos userId={userId} updateTodo={updateTodo}></Todos>
        <Posts userId={userId}></Posts>
      </div>
    )
  );
}

export default TodosAndPosts;
