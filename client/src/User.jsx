import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router";
import { baseURL, getAll, updateById } from "./utils/dbUtils";

function User({ user }) {
  const URLtoGetTodos = `${baseURL}/todos?userId=${user.id}`;
  const URLpostUser = `${baseURL}/users/${user._id}`;

  const [bordercolor, setBorderColor] = useState("red");
  const [toggleOthers, setToggleOthers] = useState(false);

  const [todos, setTodos] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const IsTasksCompleted = (todos) => {
    return todos.every((task) => task.completed === true);
  };
  useEffect(() => {
    const getTodos = async () => {
      const { data } = await getAll(URLtoGetTodos);
      setTodos(data);
      setBorderColor(IsTasksCompleted(data) ? "green" : "red");
    };
    setCurrentUser(user || {});
    getTodos();
  }, [user]);

  const userStyle = {
    marginTop: "10px",
    border: "1.5px solid ",
    height: toggleOthers ? "260px" : "160px",
    width: "90%",
    padding: "0.5rem",
  };

  return (
    Object.keys(currentUser).length > 0 && (
      <div
        style={{ ...userStyle, borderColor: bordercolor }}
        // onClick={() => setToggleOthers(false)}
      >
        <div style={{ display: "inline-block" }}>
          <Link to={`/otherdata/${currentUser.id}`}> ID: </Link>
          <span> {currentUser.id} </span>
          <br />
          <label>Name</label>
          <input
            style={{ width: "170px" }}
            type="text"
            value={currentUser.name}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, name: e.target.value })
            }
          />
          <br />
          <label>Email</label>
          <input
            style={{ width: "170px" }}
            type="text"
            value={currentUser.email}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, email: e.target.value })
            }
          />
          <br />
          <button
            style={{
              float: "left",
              marginTop: "15px",
              backgroundColor: "grey",
            }}
            onMouseOver={() => setToggleOthers(true)}
          >
            Other Data
          </button>
        </div>
        {/*-- other Data  */}
        <div
          style={{
            display: toggleOthers ? "block" : "none",
            margin: "10px 0px 0px -5px",
            paddingLeft: "0.5rem",
            border: "1px solid grey",
            borderRadius: "30px",
          }}
        >
          <label>Street</label>
          <input
            type="text"
            value={currentUser.street}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, street: e.target.value })
            }
          />
          <br />
          <label>City</label>
          <input
            type="text"
            value={currentUser.city}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, city: e.target.value })
            }
          />
          <br />
          <label>Zip Code</label>
          <input
            type="text"
            value={currentUser.zipcode}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, zipcode: e.target.value })
            }
          />
        </div>
        <div
          style={{ display: "inline-block", width: "100%", marginTop: "8px" }}
        >
          <button style={{ float: "right" }}>Delete</button>
          <button
            style={{ float: "right", marginRight: "5px" }}
            onClick={(e) => {
              e.preventDefault();

              updateById(URLpostUser, currentUser);
            }}
          >
            Update
          </button>
        </div>
      </div>
    )
  );
}

export default User;
