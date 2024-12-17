const Post = require("../models/postModel");

const getPostsByUserId = (userId) => {
  return Post.find({ userId: userId });
};
const getPostById = (id) => {
  return Post.findById(id);
};

const addPost = async (post) => {
  const newPost = new Post(post);
  await newPost.save();
  return "Post Added ";
};

const updatePost = async (id, post) => {
  await Post.findByIdAndUpdate(id, post);
  return "Post Updated ";
};

const deletePost = async (id) => {
  await Post.findByIdAndDelete(id);
  return "Post Deleted ";
};

module.exports = {
  getPostsByUserId,
  getPostById,
  addPost,
  updatePost,
  deletePost,
};
