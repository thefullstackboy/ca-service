import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';

import './All_STYLE/Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-light navbar-bg-color">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand text-white fs-2 ">aapkCA</Link>
    <div className="d-flex my-2">
        <Link to={'/log-in'} className='fs-3 nav-link text-white'>
   <LoginIcon className='fs-3'/> Login</Link>

   <Link to={'/sign-up'} className='fs-3 nav-link text-white'>
   <AccountBoxIcon className='fs-3'/> Signup</Link> 
    </div>
  </div>
</nav>
    </>
  )
}
