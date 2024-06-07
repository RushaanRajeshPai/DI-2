import React from 'react'
import logo from '../Assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-main'>
            <img src={logo} alt="" />
            <a href="" id='navbar-home'>Home</a>
            <a href="">About Us</a>
            <a href="">Services</a>
            <a href="">Contact Us</a>
            <a href="">Blog</a>
            <button id='btn-signup'>Sign Up</button>
        </div>
    )
}

export default Navbar


