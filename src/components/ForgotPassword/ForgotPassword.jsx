import React from 'react'
import { Link } from 'react-router-dom';
import "../ForgotPassword/ForgotPassword.css"
import CONSTANTS from "../../main"


export default function ForgotPassword() {
  return (
    <section className="" >
  <div className="container form-top">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card2">
          <div className="card-body p-5 text-center form-bg">
            <h3 className="mb-5 text-uppercase text-white">Registered  email</h3>
            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' />           
            </div>                     
            <button type="button" className="btn btn-light btn-lg">Submit</button>
          </div>  
          <Link to={CONSTANTS.URL.SIGN_IN} className='nav-link'>
            <p className='text-center fs-4 mt-3'>Already have password login</p>
          </Link>       
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
