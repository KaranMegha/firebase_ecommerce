import React from 'react'
import "./Home.css"
import Navbar from './Navbar'
import Products from './Products'

function home() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default home
