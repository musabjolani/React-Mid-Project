import { useState } from 'react'

import './App.css'
import User from './User';

function UsersPage() {
  
  const usersPageStyle=
{
  "background-color": "yellowgreen",
  "border-radius": "20px",
  "border":"1.5px solid grey",
  "height": "400px",
  "width": "270px",
  "padding": "0.5rem",
  "overflow": "scroll"
}

  return (
  <div  style={usersPageStyle}>
    <label>Search</label>
    <input style={{}}size="" type="text"/>
    <button style={{float:"right"}}>Add</button>
    <User></User>
    <User></User>
    <User></User>
    <User></User>
    <User></User>
    <User></User>
    <User></User>
    <User></User>
    <User></User>
  
  </div>
  
  )
}

export default UsersPage
