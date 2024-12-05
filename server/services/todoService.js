const todoRep =require("../repositories/todoRep");

const getTodosByUserId=async(userId)=>{
    const todos=await todoRep.getTodosByUserId(userId);
    return todos.map((task)=>{return {completed:task.completed}})
}

module.exports={getTodosByUserId}