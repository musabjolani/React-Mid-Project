import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";
import { baseURL, getAll } from "./utils/dbUtils";
import { useNavigate } from "react-router-dom";

function Posts({ userId }) {
  const URL = `${baseURL}/posts?userId=${userId}`;
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = () => {
      getAll(URL).then((result) => {
        setPosts(result.data);
      });
    };
    getPosts();
  }, [userId]);
  const postsStyle = {
    height: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
    border: "2px solid black",
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <span style={{ marginLeft: "8px" }}>Posts User- {userId}</span>
      <button
        style={{ float: "right", marginRight: "0px" }}
        onClick={() => navigate(`/otherdata/addpost/${userId}`)}
      >
        Add
      </button>
      <div style={postsStyle}>
        {posts.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
}

export default Posts;
