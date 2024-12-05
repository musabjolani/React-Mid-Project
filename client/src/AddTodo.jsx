
import './App.css'


function AddTodo() {
  
  const todoStyle={
    height:"160px",
    display: "flex", 
    flexDirection: "column",
    justifyContent:"center", 
    border:"2px solid "
  }
  
  return (
  <form>
    <span style={{marginLeft:"8px"}}>New Todo User- 1</span>
    <div style={todoStyle}>
    <br/>
    <div>
      <label>Title</label>
      <input size="" type="text"/> 
      <br/>
      <div style={{display:"flex",justifyContent: "flex-end",gap:"10px",marginTop:"8px"}}>
        <button >Add</button>
        <button >Cancel</button>
      </div>
    </div>
    </div>
  </form>
  )
}

export default AddTodo
