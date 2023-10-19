import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import CONSTANTS from "../../main";
import "../SignUp/SignUp.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {    
try {   
if(data.password === data.confirmPassword){
  axios.post(CONSTANTS.APIURL.SIGN_UP,
    {
      name:data.Name,
      email: data.Email,          
      password:data.password,
      password2: data.confirmPassword,
      is_ca:data.ifCa     
    }).then((response)=>{   
      if(response.data.success === "CA created successfully"){    
        toast.success('signup successfully', {
          position: toast.POSITION.TOP_CENTER
        });
      }       
      if(response.data.error==="Email already exists"){
        toast.error("Email already exists")
      }         
    })      
  } 
  else {
    toast.error("password and confirm password not match.")
  } 
} catch (e) {
  console.log(e.response.message)
  console.log(e)
}  
  }  
  return (
    <section className="" >
      <div className="container form-top">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card2">
              <div className="card-body p-5 text-center form-bg">
                <h3 className="mb-5 text-uppercase text-white">Sign Up</h3>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline mb-4">
                    <input type="text"  className="form-control form-control-lg" placeholder='Name'
                      {...register("Name", { required: true})}
                    />
                    {errors.Name && <p className='text-white text-start'>* Please type your Name.</p>}
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email"  className="form-control form-control-lg" placeholder='Email'
                      {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.Email && <p className='text-white text-start'>* Please check the email id.</p>}
                  </div>


                  <div className="form-outline mb-4">
                    <input type="password"  className="form-control form-control-lg" placeholder='Password' 
                     {...register("password",
                     {required: true,minLength:6})}  
                    />
                      {errors.password && <p className='text-white text-start'>* Password must be at least 6 characters</p>}
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password"  className="form-control form-control-lg" placeholder='Confirm Password' 
                     {...register("confirmPassword",
                     {required: true,minLength:6})} 
                    />
                     {errors.confirmPassword && <p className='text-white text-start'>* Password must be at least 6 characters</p>}  
                  </div>

                  <div className="form-outline mb-4">
                    <label className="checkboxcontainer text-white fs-5">CA
                      <input type="checkbox" 
                      {...register("ifCa", {required: false})}
                      />
                      <span className="checkmark"></span>
                    </label>                 
                  </div>
                  <button type="submit" className="btn btn-light btn-lg">Signup</button>
                  <ToastContainer />
                </form>
              </div>
              <Link to={CONSTANTS.URL.SIGN_IN} className='nav-link'>
                <p className='text-center fs-4 mt-3'>Already have the password please login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
