
import './App.css'

function Todo() {
  
const labelWidth ="85px"

  return (
  
  <div  style={{width :"80%", border:"1px solid purple",marginTop:"12px"}} >
      <label style={{  display: "inline-block",width:labelWidth}}>Title:</label>  
      <span>Title</span>
      <div style={{ display :"inline-block", width: "100%"}}>
        <label style={{display: "inline-block",width:labelWidth}}>Completed: </label>
        <span>True</span>
        <button style={{float:"right" ,}}>Mark Completed</button>
     </div>
    </div>
  
  )
}

export default Todo
