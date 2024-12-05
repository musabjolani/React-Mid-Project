
import './App.css'
import Todo from './Todo';

function OtherData() {
  
  const TodosStyle=
  {
    height:"160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
     border :"2px solid black"
  }


  return (
  <>      
    <div style={{marginTop:"3px"}}>
      <span style={{marginLeft:"8px"}}>Todos User 1</span>
      <button style={{float:"right",marginRight:"0px"}}>Add</button>
    </div>
    <div style={TodosStyle}>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </div>
  </>

    
  )
}

export default OtherData
