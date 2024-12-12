import { useEffect, useState } from "react";
import "./App.css";
import { addData, baseURL } from "./utils/dbUtils";

function AddUser() {
  const todoStyle = {
    height: "190px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "2px solid ",
  };

  const URL = `${baseURL}/users`;
  const [user, setUser] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    const newErrors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    e.preventDefault();

    if (user.name.trim() === "") newErrors.push("name");
    if (!emailRegex.test(user.email)) newErrors.push("email");

    setErrors(newErrors);

    if (newErrors.length > 0) return;
    addData(URL, user);
    setUser({ ...user, name: "", email: "" });
  };

  return (
    <form style={{ marginTop: "30%" }} onSubmit={(e) => handleSubmit(e)}>
      <span style={{ marginLeft: "8px" }}>Add New User</span>
      <div style={todoStyle}>
        <div>
          <div>
            <label>Name</label>
            <input
              value={user.name}
              type="text"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div style={{ display: errors.includes("name") ? "block" : "none" }}>
            <span style={{ color: "red" }}>
              Please enter a name for the user
            </span>
          </div>
          <div>
            <label>Email</label>
            <input
              value={user.email}
              type="text"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <span
              style={{
                color: "red",
                display: errors.includes("email") ? "block" : "none",
              }}
            >
              Please enter a valid email for the user
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            <button type="submit">Add</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddUser;
