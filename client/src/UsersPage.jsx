import { useEffect, useState } from 'react';
import './App.css'
import User from './User';
import { getAll } from './utils/dbUtils';

function UsersPage() {
  
  const URL="http://localhost:3300/users";
  const[users,setUsers]=useState([]);
  const[search,setSearch]=useState("");


 

useEffect(() => {
    const getUsers = async () => {
        
            const { data } = await getAll(URL);
            const lowerCaseSearch = search.toLowerCase();

            const filteredUsers = search
                ? data.filter(user => 
                    user.name.toLowerCase().includes(lowerCaseSearch) || 
                    user.email.toLowerCase().includes(lowerCaseSearch)
                )
                : data;

            setUsers(filteredUsers);
           };

    getUsers();
}, [search]);


  return (
  <div   className="usersPage">
    <label>Search</label>
    <input style={{}}size="" onChange={(e)=>setSearch(e.target.value)} type="text"/>
    <button style={{float:"right",marginRight:"7px"}}>Add</button>
    {
      users.map((user)=>(<User key={user._id} user={user}/>))
    }
    
  </div>
  
  )
}

export default UsersPage
