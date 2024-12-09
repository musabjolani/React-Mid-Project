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

router.get("/:id",async(req,res)=>{
try {
    const {id}=req.params;
   res.json( await userService.getUserById(id));
} catch (error) {
    res.status(404).json(error.message);
}
})

router.post("/", async (req, res) => {
    try {
      const user = req.body;
      res.json(await userService.addUser(user));
    } catch (error) {
      res.status(404).json(error.message);
    }
  });

 


router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.body;
      res.json(await userService.updateUser(id,user));
    } catch (error) {
      res.status(404).json(error.message);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
     const { id } = req.params;
     res.json(await userService.deleteUser(id));
    } catch (error) {
     
      res.status(404).json(error.message);
    }
  });





module.exports=router;