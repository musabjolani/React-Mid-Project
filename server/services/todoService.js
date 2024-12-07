const todoRep =require("../repositories/todoRep");

const getTodosByUserId=async(userId)=>{
    return await todoRep.getTodosByUserId(userId);
    
}

module.exports={getTodosByUserId}