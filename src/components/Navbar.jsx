import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/logo192.png'

const Navbar = () => {
  return (
    <div className='navbox'>
    <div className="leftside">
    <img src={logo} alt="" />
    </div>
    <div className="rightside">
    <Link to="/signup" className='navlinks'>SIGNUP</Link>
    <Link to="/login" className='navlinks'>LOGIN</Link>
    </div>
    </div>
  )
}

export default Navbar
