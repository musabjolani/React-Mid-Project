
import './App.css'
import Todo from './Todo';

function OtherData() {
  
    const todoStyle=
  {
    height:"220px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow:"scroll"
  }


  return (
  <div  style={{marginTop:"15px",border:"2px solid purple"}}>
      <span >Todos- User 1 </span>
      <div style={todoStyle}>
        <Todo></Todo>
        <Todo></Todo>
        <Todo></Todo>
        <Todo></Todo>
      </div>
     </div>
     
    
  )
}

export default OtherData
