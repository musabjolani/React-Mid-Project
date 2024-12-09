const todoRep =require("../repositories/todoRep");

const getTodosByUserId=async(userId)=>{
    return await todoRep.getTodosByUserId(userId);
    }

const getTodosById=async(id)=>{ return await todoRep.getTodosById(id)};

const addTodo =(todo)=>{return todoRep.addTodo(todo)}

const updateTodo =(id,todo)=>{return todoRep.updateTodo(id,todo)}

const deleteTodo =(id)=>{return todoRep.deleteTodo(id)}



module.exports={getTodosByUserId,getTodosById,addTodo,updateTodo,deleteTodo}