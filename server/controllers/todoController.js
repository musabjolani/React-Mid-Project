const express = require("express");
const router = express.Router();
const todoReq=require("../services/todoService") 

router.get("/:userId",async(req,res)=>{
 try{
    const { userId } = req.params;
    res.json(await todoReq.getTodosByUserId(userId))
} catch (error) {
    res.status(404).json(error.message);
}
})

module.exports=router;