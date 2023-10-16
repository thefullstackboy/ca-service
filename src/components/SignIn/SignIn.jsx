import React, {useState} from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom';
import CONSTANTS from "../../main"

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('')

  const [data, setData] = useState(null);

  function showLoginMessage(){
    console.log(loginMessage)
  }

  function handleClick() {
    let body = {
      "email": email,
      "password": password
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', CONSTANTS.APIURL.SIGN_IN);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = function() {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
        setLoginMessage("Login Successfull")
        showLoginMessage()
      } else if (xhr.status === 401){
        setLoginMessage("Invalid email or password")
        showLoginMessage()
      }
    };
    xhr.send(JSON.stringify(body));
  }



  return (
    <section className="" >
      <div className="container form-top">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card2">
              <div className="card-body p-5 text-center form-bg">
                <h3 className="mb-5 text-uppercase text-white">Sign in</h3>
                <div className="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />           
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} />             
                </div>           
                <button onClick={handleClick} type="button" className="btn btn-light btn-lg">Sign in</button>

              </div>
              <Link to={CONSTANTS.URL.FORGOT_PASSWORD} className='nav-link'>
                <p className='text-center fs-4 mt-3'>Forgot password</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn