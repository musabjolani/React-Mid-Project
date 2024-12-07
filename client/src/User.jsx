
import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router';
import { getAll } from './utils/dbUtils';

function User({user}) {
  
  const URL =`http://localhost:3300/todos/${user.id}`;

  const [bordercolor,setBorderColor]=useState("red");
  const [toggleOthers,setToggleOthers]=useState(false);

  const [todos,setTodos]=useState({});
  
  const  IsTasksCompleted=(todos)=> {
    return todos.every(task => task.completed === true);
  }
  useEffect(()=>{

  const getTodos=async()=>{
    const {data}=await getAll(URL);
    setTodos(data);
    setBorderColor(IsTasksCompleted(data) ? "green":"red")
  };
    getTodos();
   
    },[])

    
  const userStyle=
  {
    "margin-top":"10px",
    "border":"1.5px solid ",
    "height":toggleOthers ? "260px" :"160px",
    "width" : "90%",
    "padding": "0.5rem",
    
  }


  return (
  <div  style={{...userStyle,borderColor:bordercolor}} onClick={()=>setToggleOthers(false)}>
    <div style={{display:"inline-block"}}>
      <Link to={`/otherdata/${user.id}`}> ID: </Link> 
      <span> {user.id} </span>
       <br/>
      <label>Name</label>
      <input style={{width:"170px"}} type="text" value={user.name} readOnly/> 
      <br/>
      <label>Email</label>
      <input style={{width:"170px"}} type="text" value={user.email} readOnly />
      <br/>
      <button style={{float:"left",marginTop:"15px", backgroundColor:"grey"}}
            onMouseOver={()=>setToggleOthers(true)}>Other Data</button>
    </div>
      {/*-- other Data  */}
    <div style={{ display:(toggleOthers ? 'block'  : "none") ,  margin:"10px 0px 0px -5px", paddingLeft:"0.5rem", border:"1px solid grey",borderRadius:"30px" }}>
        <label>Street</label>
        <input  type="text" value={user.street} readOnly/>
        <br/>
        <label>City</label>
        <input  type="text" value={user.city} readOnly/>
        <br/>
        <label>Zip Code</label>
        <input  type="text" value={user.zipcode} readOnly/>
    </div>
    <div style={{ display :"inline-block", width: "100%",marginTop :"8px"}}>
      <button style={{float:"right" ,}}>Delete</button>
      <button style={{float:"right",marginRight:"5px"}}>Update</button>
    </div>
  </div>
  )
}

export default User
