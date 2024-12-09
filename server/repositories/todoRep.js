const Todo = require("../models/todoModel");


const getTodosByUserId=(userId)=>{
   return Todo.find({ "userId" : userId });
}

const getTodosById=(id)=>{
   return Todo.findById( id );
}

const addTodo =async(todo)=>{
   const newToDo = new Todo(todo);
   await newToDo.save();
   return "Todo Added ";
}

const updateTodo = async (id, todo) => {
   await Todo.findByIdAndUpdate(id, todo);
   return "Todo Updated ";
 };
 
 const deleteTodo = async (id) => {
   await Todo.findByIdAndDelete(id);
   return "Todo Deleted ";
 };

module.exports={getTodosByUserId,getTodosById,addTodo,updateTodo,
               deleteTodo
} 


