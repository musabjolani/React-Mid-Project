const Post = require("../models/postModel");
const Todo = require("../models/todoModel");
const User = require("../models/userModel");

const getAllUsers = () => {
  return User.find();
};

const getUserById = (id) => {
  return User.findById(id);
};

const addUser = async (user) => {
  let maxId = 0;
  const users = await User.find().lean(); // Fetch all users
  if (users.length != 0) {
    // Convert id to numbers and find the max
    maxId = Math.max(...users.map((user) => Number(user.id)));
  }

  const newUser = new User({ ...user, id: maxId + 1 });
  await newUser.save();
  return "User Added ";
};

const updateUser = async (id, user) => {
  await User.findByIdAndUpdate(id, user);
  return "User Updated ";
};

const deleteUser = async (id) => {
  const { id: userId } = await User.findById(id);

  // Delete Todos associated with the User
  await Todo.deleteMany({ userId: userId });

  // Delete Posts associated with the User
  await Post.deleteMany({ userId: userId });

  await User.findByIdAndDelete(id);

  return "User Deleted ";
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
