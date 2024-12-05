
import './App.css'
import Post from './Post';


function Posts() {
  
  const postsStyle=
  {
    height:"160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
    border :"2px solid black"
  }


  return (
    <div style={{marginTop :"20px"}}>
      <span style={{marginLeft:"8px"}}>Posts User- 1</span>
      <button style={{float:"right",marginRight:"0px"}}>Add</button>
      <div style={postsStyle}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      </div>
   
     
    
  )
}

export default Posts
