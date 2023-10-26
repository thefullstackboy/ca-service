import './SignIn.css';
import { Link } from 'react-router-dom';
import CONSTANTS from "../../main";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(CONSTANTS.APIURL.SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.Email, password: data.password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("access", data.access);
        toast.success("Login successful");
      } else {
        // Handle login error here
        toast.error('Email id and password not match',{
          position: toast.POSITION.TOP_CENTER,
          className: 'mt-5'
        });
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <section className="" >
      <div className="container form-top">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card2">
              <div className="card-body p-5 text-center form-bg">
                <h3 className="mb-5 text-uppercase text-white">Sign in</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline  position-relative mb-4">
                    <input type="email" className="form-control form-control-lg" placeholder='Email'
                      {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.Email && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please check the email id.</p>}
                  </div>

                  <div className="form-outline position-relative mb-4">
                    <input type="password"  className="form-control form-control-lg" placeholder='Password'
                      {...register("password",
                        { required: true })}
                    />
                    {errors.password && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* This field may not be blank.</p>}
                  </div>
                  <button type="submit" className="btn btn-light btn-lg">Sign in</button>
                  <ToastContainer />
                </form>
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