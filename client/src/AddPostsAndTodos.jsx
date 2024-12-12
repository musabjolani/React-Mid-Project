import "./App.css";
import AddPost from "./AddPost";
import Todos from "./Todos";
import { useOutletContext } from "react-router-dom";

function AddPostsAndTodos() {
  const userId = useOutletContext();
  return (
    <div style={{ marginTop: "15px" }}>
      <Todos userId={userId}></Todos>
      <AddPost userId={userId} />
    </div>
  );
}

export default AddPostsAndTodos;
