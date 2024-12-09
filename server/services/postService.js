const postRep =require("../repositories/postRep");

const getPostsByUserId=async(userId)=>{
    return await postRep.getPostsByUserId(userId);
    }

const getPostById=async(id)=>{return await postRep.getPostById(id) }
    
const addPost =(post)=>{return postRep.addPost(post)}

const updatePost =(id,post)=>{return postRep.updatePost(id,post)}

const deletePost =(id)=>{return postRep.deletePost(id)}


module.exports={getPostsByUserId,getPostById,addPost,updatePost,deletePost}