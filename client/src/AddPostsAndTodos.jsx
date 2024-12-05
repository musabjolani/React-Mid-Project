
import './App.css'
import AddPost from './AddPost';
import Todos from './Todos';


function AddPostsAndTodos() {
  return (
    <div  style={{marginTop:"15px"}}>
      <Todos/>
      <AddPost/>
    </div>
  )
}

export default AddPostsAndTodos
