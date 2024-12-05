
import './App.css'

function Post() {
  
const labelWidth ="85px"

  return (
    <div  style={{width :"80%", border:"1.5px solid purple",marginTop:"12px"}} >
      <label style={{  display: "inline-block",width:labelWidth}}>Title:</label>  
      <span>Title</span>
      <br/>
      <label style={{display: "inline-block",width:labelWidth}}>Body </label>
      <span>Body</span>
    </div>
  )
}

export default Post
