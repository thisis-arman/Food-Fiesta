import React, { useContext, useState } from 'react';
import './Register.css'
import SocialLoginBtn from '../../Utils/SocialLoginBtn';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [error,setError] =useState('')
    const {createUser,updateUserProfile} =useContext(AuthContext)

    const handleRegister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const email = form.email.value;
        const photo = form.photourl.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        setError('')

        if(!/(?=.*?[A-Z])/.test(password)){
            setError('Please add at least one uppercase')
            return;
        }
        else if(!/.{6,}/.test(password)){
            setError('please add At least 6 charecter')
            return;
        }
        else if(!(password === confirm)){
            setError("Password doesn't match")
            return;
        }
          createUser(email, password)
          .then(result=>{
            const createdUser=result.user;
            console.log(createdUser)
            form.reset('')

          })
          .catch(error=>{
            console.log(error)
          })
       updateUserProfile(name,photo)
       .then(result=>{result.user})
       .catch(error=>{console.log(error.message)})

        console.log(name,email,photo,password,confirm)
    }

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <Form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='photourl' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered"  required/>

         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" name='confirm' placeholder="password" className="input input-bordered" />
         
        </div>
        <p><small className='text-red-500'>{error}</small></p>
        <div className="form-control mt-6">
          <button className="btn bg-green-500 hover:bg-sky-500">Register</button><br />
          <p className='text-gray-500'>Already Have An Account?<span><Link className='underline text-blue-600' to='/login'>Login</Link></span></p>
        </div>
        <SocialLoginBtn/>
      </div>
    </Form>
  </div>
</div>
        </div>
    );
};

export default Register;