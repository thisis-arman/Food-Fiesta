import React, { useContext } from 'react';
import './Login.css'
import SocialLoginBtn from '../../Utils/SocialLoginBtn';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase.config';

const auth =getAuth(app)

const Login = () => {
  const{signIn} =useContext(AuthContext)


  const handleLogin =event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
      .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error=>{
        console.log(error)
      })
  }
  const googleProvider = new GoogleAuthProvider()
  const handleSignInWithGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error =>{
      console.log(error)
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
        <div className="form-control mt-6">
          <button  className="btn bg-green-500 hover:bg-sky-500">Login</button><br />
          <span>Don't have an Account? <Link to='/register'>Register</Link></span>
        </div>
<SocialLoginBtn handleSignInWithGoogle={handleSignInWithGoogle} />
      </div>
    </Form>
  </div>
</div>
        </div>
    );
};

export default Login;