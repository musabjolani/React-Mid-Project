import { useEffect, useState } from "react";
import "./App.css";
import User from "./User";
import { baseURL, getAll } from "./utils/dbUtils";
import { useNavigate } from "react-router-dom";
import AddPostsAndTodos from "./AddPostsAndTodos";
import AddTodosAndPosts from "./AddTodosAndPosts";
import AddUser from "./AddUser";
import TodosAndPosts from "./TodosAndPosts";
import { Route, Routes } from "react-router-dom";

function App() {
  const URL = `${baseURL}/users`;
  const backgroundColorForUser = "#f7dc6f";
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await getAll(URL);
      const sortedData = data.sort((a, b) => a.id - b.id);
      setUsers(sortedData);
      setFilteredUsers(sortedData);
    };
    getUsers();
  }, []);

  const updateTodo = (userId, todoId, todo) => {
    const usersArr = [...users];
    const userIndex = usersArr.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return -1;
    }

    const todoIndex = usersArr[userIndex].todos.findIndex(
      (existingTodo) => existingTodo._id === todoId
    );

    if (todoIndex === -1) {
      return -1;
    }

    usersArr[userIndex].todos[todoIndex] = todo;
    setUsers(usersArr);
  };

  const AddTodoToUser = (userId, todo) => {
    const usersArr = [...users];
    const userIndex = usersArr.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return -1;
    }
    usersArr[userIndex].todos.push(todo);
    setUsers(usersArr);
  };
  const IsTasksCompleted = (todos) => {
    return todos.every((task) => task.completed === true);
  };

  const handleSearch = (searchText) => {
    const lowerCaseSearch = searchText.toLowerCase();
    const filteredUsers = searchText
      ? users.filter(
          (user) =>
            user.name.toLowerCase().includes(lowerCaseSearch) ||
            user.email.toLowerCase().includes(lowerCaseSearch)
        )
      : users;
    setFilteredUsers(filteredUsers);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px", height: "150px" }}>
        <div style={{ flex: 1 }}>
          <div className="usersPage">
            <label>Search</label>
            <input
              placeholder="Name or Email"
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
            />
            <button
              style={{ float: "right", marginRight: "7px" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/otherdata/adduser");
              }}
            >
              Add
            </button>
            {filteredUsers.map((user) => (
              <User
                key={user._id}
                user={user}
                selUserId={setSelectedUserId}
                IsTasksCompleted={IsTasksCompleted}
                backgroundColor={
                  user.id === selectedUserId ? backgroundColorForUser : "white"
                }
              />
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route
              path="otherdata/:userId"
              element={<TodosAndPosts updateTodo={updateTodo} />}
            />
            <Route
              path="/otherdata/addtodo/:userId"
              element={<AddTodosAndPosts AddTodoToUser={AddTodoToUser} />}
            />
            <Route
              path="/otherdata/addpost/:userId"
              element={<AddPostsAndTodos />}
            />
            <Route path="/otherdata/adduser" element={<AddUser />} />
            <Route
              path="*"
              element={<TodosAndPosts updateTodo={updateTodo} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
