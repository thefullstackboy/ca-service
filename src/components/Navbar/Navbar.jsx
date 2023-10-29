import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css"
import CONSTANTS from "../../main"

export default function Navbar() {
  const authenticated = localStorage.getItem("authenticated");

  if (authenticated === "true"){
    return (
      <>
        <nav className="navbar navbar-light navbar-bg-color">
          <div className="container-fluid">
          <Link to={CONSTANTS.URL.HOME} className="navbar-brand text-white fs-2 ">aapkaCA</Link>
          <div className="d-flex my-2">
            <Link to={CONSTANTS.URL.SIGN_OUT} className='fs-3 nav-link text-white'>
            <LogoutIcon className='fs-3'/> Sign out</Link>
            <Link to={CONSTANTS.URL.SIGN_UP} className='fs-3 nav-link text-white'>
            <AccountBoxIcon className='fs-3'/> Signup</Link> 
          </div>
          </div>
        </nav>
      </>
    )
  } else {
    return (
      <>
        <nav className="navbar navbar-light navbar-bg-color">
          <div className="container-fluid">
          <Link to={CONSTANTS.URL.HOME} className="navbar-brand text-white fs-2 ">aapkaCA</Link>
          <div className="d-flex my-2">
            <Link to={CONSTANTS.URL.SIGN_IN} className='fs-3 nav-link text-white'>
            <LoginIcon className='fs-3'/> Sign in</Link>
            <Link to={CONSTANTS.URL.SIGN_UP} className='fs-3 nav-link text-white'>
            <AccountBoxIcon className='fs-3'/> Signup</Link> 
          </div>
          </div>
        </nav>
      </>
    )
  }
}
