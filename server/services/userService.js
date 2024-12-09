const userRep =require("../repositories/userRep");

const getAllUsers =()=>{return userRep.getAllUsers()}

const getUserById = (id)=>{return userRep.getUserById(id)}

const addUser =(user)=>{return userRep.addUser(user)}

const updateUser =(id,user)=>{return userRep.updateUser(id,user)}

const deleteUser =(id)=>{return userRep.deleteUser(id)}


module.exports={getAllUsers,getUserById,addUser,updateUser,deleteUser} 