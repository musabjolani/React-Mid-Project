const mongoose = require("mongoose");


const connectDB= ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Users")
    .then(console.log("DataBase Connected successfully ..."))
    .
    catch((err)=>{console.log(err)})
}

module.exports=connectDB; 