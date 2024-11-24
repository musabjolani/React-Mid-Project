
import { useState } from 'react'
import './App.css'

function User() {
  
  const [bordercolor,setBorderColor]=useState("red");
  const [toggleOthers,setToggleOthers]=useState(false);

    const userStyle=
  {
    "margin-top":"10px",
    "border":"1.5px solid ",
    "height":toggleOthers ? "240px" :"150px",
    "width" : "230px",
    "padding": "0.5rem",
    
  }


  return (
  <div  style={{...userStyle,borderColor:bordercolor}} onClick={()=>setToggleOthers(false)}>
      <div style={{display:"inline-block"}}>
      <label>ID</label>  1 <br/>
      <label>Name</label>
      <input style={{}}size="" type="text"/> 
      <br/>
      <label>Email</label>
      <input style={{}}size="" type="text"/>
      <button style={{float:"left",backgroundColor:"grey"}}
              onMouseOver={()=>setToggleOthers(true)}>Other Data</button>
      </div>
      <div style={{ display:(toggleOthers ? 'block'  : "none") ,  margin:"10px 0px 0px -5px", paddingLeft:"0.5rem", border:"1px solid grey",borderRadius:"30px" }}>
          <label>Street</label>
          <input style={{}}size="" type="text"/>
          <br/>
          <label>City</label>
          <input style={{}}size="" type="text"/>
          <br/>
          <label>Zip Code</label>
          <input style={{}}size="" type="text"/>
      </div>
      <div style={{ display :"inline-block", width: "100%",marginTop :"10px"}}>
      
        <button style={{float:"right" ,}}>Delete</button>
        <button style={{float:"right",marginRight:"5px"}}>Update</button>
      </div>
    </div>
  )
}

export default User
