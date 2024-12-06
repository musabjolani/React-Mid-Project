const express = require("express");
const router = express.Router();
const todoReq=require("../services/todoService") 

router.get("/:userId",async(req,res)=>{
 try{
    const { userId } = req.params;
    const todos=await todoReq.getTodosByUserId(userId);
    res.json(todos.map((task)=>{return {completed:task.completed}}))
} catch (error) {
    res.status(404).json(error.message);
}
})

module.exports=router;