import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UsersPage() {
  const [count, setCount] = useState(0);
  const usersPageStyle=
{
  "background-color": "yellowgreen",
  "border-radius": "20px",
  "border":"1.5px solid grey",
  "height": "400px",
  "width": "250px",
  "padding": "0.5rem"
}

  return (
    <>
     <div  style={usersPageStyle}>
        <label>Search</label>
        <input style={{}}size="" type="text"/>
        <button style={{float:"right"}}>Add</button>
     
    </div>
    </>
  )
}

export default UsersPage
