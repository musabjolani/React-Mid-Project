const mongoose = require("mongoose");

const postSchema =mongoose.Schema({
   
    title:String,
    body:String,
    userId: {
        type: String,
        ref: "User",
      },
},
{ versionKey: false }
);

const Post=mongoose.model("Post", postSchema);

module.exports =Post;