import "./App.css";
import AddPost from "./AddPost";
import Todos from "./Todos";
import { useParams } from "react-router-dom";

function AddPostsAndTodos() {
  const { userId } = useParams();
  return (
    <div style={{ marginTop: "15px" }}>
      <Todos userId={userId}></Todos>
      <AddPost userId={userId} />
    </div>
  );
}

export default AddPostsAndTodos;
