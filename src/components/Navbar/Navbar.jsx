import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-title'>
               <h1>PROSHOP</h1>
        </div>
        <div className='navbar-menu'>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Launches</li>
                <li>Sale</li>
            </ul>
        </div>
        <div className='navbar-account'>
            <ul>
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Bag</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar