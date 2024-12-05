
import AddPostsAndTodos from './AddPostsAndTodos';
import AddTodosAndPosts from './AddTodosAndPosts';
import AddUser from './AddUser';
import './App.css'
import OtherData from './OtherData'
import TodosAndPosts from './TodosAndPosts';
import UsersPage from './UsersPage'
import { Route, Routes, } from 'react-router-dom';

function App() {
 
  return (
    <div style={{display:"flex",gap:"10px",height:"150px"}}>
      <div style={{ flex:1 }}>
        <UsersPage ></UsersPage>
      </div>
      <div style={{ flex:1 }}>
      <Routes>
        <Route path="/otherdata" element={<OtherData />} >
          <Route path="" element={<TodosAndPosts />} />
          <Route path="addtodo" element={<AddTodosAndPosts />} />
          <Route path="addpost" element={<AddPostsAndTodos />} />
          <Route path="adduser" element={<AddUser />} />
        </Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
