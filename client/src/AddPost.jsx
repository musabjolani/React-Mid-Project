
import './App.css'


function AddPost() {
  
  const todoStyle={
    height:"160px",
    display: "flex", 
    flexDirection: "column",
    justifyContent:"center", 
    border:"2px solid ",
   }
  
  return (
    <form style={{marginTop:"30px"}}>
      <span style={{marginLeft:"8px"}}>New Post User- 1</span>
      <div style={todoStyle}>
        <div>
          <label>Title</label>
          <input size="" type="text"/> 
          <br/>
          <label>Body</label>
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

export default AddPost
