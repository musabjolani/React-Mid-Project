const Post = require("../models/postModel");
const Todo = require("../models/todoModel");
const User = require("../models/userModel");

const getAllUsers=()=>{
   return User.find();
}

const getUserById=(id)=>{

   return User.findById(id);
}


const addUser =async(user)=>{
   const newDept = new User(user);
   await newDept.save();
   return "User Added ";
}

const updateUser = async (id, user) => {
   await User.findByIdAndUpdate(id, user);
   return "User Updated ";
 };
 
 const deleteUser = async (id) => {
  
   const {id:userId} = await User.findById(id);
  
     // Delete Todos associated with the User
     await Todo.deleteMany({ "userId" : userId });
   
     // Delete Posts associated with the User
     await Post.deleteMany({ "userId" : userId });
   
     await User.findByIdAndDelete(id)
   
    return "User Deleted ";
 };

module.exports={getAllUsers,getUserById,addUser,updateUser,deleteUser} 