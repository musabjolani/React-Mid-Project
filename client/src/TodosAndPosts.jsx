import { useOutletContext } from "react-router-dom";
import "./App.css";

import Posts from "./Posts";
import Todos from "./Todos";

function TodosAndPosts() {
  const userId = useOutletContext();

  return (
    <div style={{ marginTop: "15px" }}>
      <Todos userId={userId}></Todos>
      <Posts userId={userId}></Posts>
    </div>
  );
}

export default TodosAndPosts;
