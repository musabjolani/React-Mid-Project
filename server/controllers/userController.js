const express = require("express");
const router = express.Router();
const userService=require("../services/userService");


router.get("/",async(req,res)=>{
try {
   res.json( await userService.getAllUsers());
} catch (error) {
    res.status(404).json(error.message);
}
    

})


module.exports=router;