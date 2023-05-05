import React, { useContext, useState } from 'react';
import './Login.css'
import SocialLoginBtn from '../../Utils/SocialLoginBtn';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase.config';
import useTitle from '../../Hooks/useTitile';

const auth =getAuth(app)

const Login = () => {
  const [error, setError] =useState('')
  const{signIn,handleSignInWithGoogle} =useContext(AuthContext)
  const navigate =useNavigate()
  const location =useLocation()
  const from = location.state?.from?.pathname || '/'
  useTitle('Login')


  
  
  const handleLogin =event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    

    signIn(email,password)
      .then(result =>{
        const loggedUser = result.user
        navigate(from,{replace:true} )
        setError('')
        
      })
      .catch(error=>{
        console.log(error)
        setError(error.message)
      })
  }
  
     
  
  
  
  




    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>


    <Form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className='text-red-400'>{error}</p>
        <div className="form-control mt-6">
          <button  className="btn bg-green-500 hover:bg-sky-500">Login</button><br />
          <span>Don't have an Account? <Link className='text-blue-500' to='/register'>Register</Link></span>
        </div>
<SocialLoginBtn  />
      </div>
    </Form>
  </div>
</div>
        </div>
    );
     } ;

export default Login;