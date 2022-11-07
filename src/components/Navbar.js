import { signOut } from '@firebase/auth'
import React from 'react'
import { auth } from "../firebase"

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Chat Application</span>
        <div className="user">
          <img src="https://wallpaper.dog/large/17068480.jpg" alt="" />
          <span>Dinesh</span>
          <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar