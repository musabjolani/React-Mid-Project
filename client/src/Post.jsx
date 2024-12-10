import "./App.css";

function Post({ post }) {
  const labelWidth = "85px";

  return (
    <div
      style={{ width: "80%", border: "1.5px solid purple", marginTop: "12px" }}
    >
      <label style={{ display: "inline-block", width: labelWidth }}>
        Title:
      </label>
      <span className="tooltip">
        {post.title.slice(0, 18) + "..."}
        <span className="tooltiptext">{post.title}</span>
      </span>
      <br />
      <label style={{ display: "inline-block", width: labelWidth }}>
        Body{" "}
      </label>
      <span className="tooltip">
        {post.body.slice(0, 18) + "..."}
        <span className="tooltiptext">{post.body}</span>
      </span>
    </div>
  );
}

export default Post;
