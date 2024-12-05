
import AddTodo from './AddTodo';
import './App.css'
import Posts from './Posts';


function AddTodosAndPosts() {
  return (
    <div  style={{marginTop:"15px"}}>
      <AddTodo></AddTodo>
      <Posts></Posts>
    </div>
  )
}

export default AddTodosAndPosts
