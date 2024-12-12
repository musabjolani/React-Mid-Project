import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { addData, baseURL } from "./utils/dbUtils";

function AddPost({ userId }) {
  const todoStyle = {
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "2px solid ",
  };
  const [post, setPost] = useState({
    userId: userId,
    title: "",
    body: "",
  });

  const URL = `${baseURL}/posts`;
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const newErrors = [];

    e.preventDefault();

    if (post.title.trim() === "") newErrors.push("title");

    setErrors(newErrors);

    if (newErrors.length > 0) return;
    addData(URL, post);
    setPost({ ...post, title: "", body: "" });
  };

  return (
    <form style={{ marginTop: "30px" }} onSubmit={(e) => handleSubmit(e)}>
      <span style={{ marginLeft: "8px" }}>New Post User- 1</span>
      <div style={todoStyle}>
        <div>
          <label>Title</label>
          <input
            value={post.title}
            type="text"
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
          />

          <br />
          <div>
            <span
              style={{
                color: "red",
                display: errors.includes("title") ? "block" : "none",
              }}
            >
              Please enter a title for your post
            </span>
          </div>

          <label>Body</label>
          <input
            value={post.body}
            type="text"
            onChange={(e) => {
              setPost({ ...post, body: e.target.value });
            }}
          />
          <br />
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

export default AddPost;
