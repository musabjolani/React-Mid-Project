const User = require("../models/todoModel");

const getTodosByUserId=(userId)=>{
   return User.find({ "userId" : userId });
}

module.exports={getTodosByUserId} 


