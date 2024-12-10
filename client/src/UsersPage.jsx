import { useEffect, useState } from 'react';
import './App.css'
import User from './User';
import { getAll } from './utils/dbUtils';


function UsersPage() {
  
  const URL="http://localhost:3300/users";
  const[users,setUsers]=useState([]);
  const[filteredUsers,setFilteredUsers]=useState([]);
 

useEffect(() => {
  const getUsers = async () => {
    const { data } = await getAll(URL);
      
    setUsers(data.sort((a, b) => a.id - b.id));
    setFilteredUsers(data);
  };

  getUsers();
}, []);

const handleSearch=(searchText)=>{
  
  const lowerCaseSearch = searchText.toLowerCase();
  const filteredUsers = searchText
      ? users.filter(user => 
          user.name.toLowerCase().includes(lowerCaseSearch) || 
          user.email.toLowerCase().includes(lowerCaseSearch)
      )
      : users;
  setFilteredUsers(filteredUsers);
  }
  return (
  <div   className="usersPage">
    <label>Search</label>
    <input placeholder='Name or Email' onChange={(e)=>handleSearch(e.target.value)}   type="text"/>
    <button style={{float:"right",marginRight:"7px"}}>Add</button>
    {
      filteredUsers.map((user)=>(<User key={user._id} user={user}/>))
    }
    
  </div>
  
  )
}

export default UsersPage
