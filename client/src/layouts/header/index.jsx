import React from 'react'
import { NavLink } from "react-router-dom";
import './index.scss'
const Header = () => {
  return (
    <div className='navbar'>
        <div className='logo'><NavLink to={'/'}><img src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png" /></NavLink></div>
        <div className='link'>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/'}>Courses</NavLink></li>
                <li><NavLink to={'/'}>About</NavLink></li>
                <li><NavLink to={'/'}>Contact</NavLink></li>
                <li><NavLink to={'/'}>Blog</NavLink></li>
            </ul>
        </div>
        <div className='navBtn'>
            <button className='Btn_1'>Join</button>
            <button className='Btn'>Log In</button>
        </div>
    </div>
  )
}

export default Header