import React, { useContext } from 'react';
import { FaGithub, FaGoogle} from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const SocialLoginBtn = () => {

    const {handleSignInWithGithub,handleSignInWithGoogle} =useContext(AuthContext)
    return (
        <div>
            <div className='my-2'>
                <button onClick={handleSignInWithGoogle} className='w-full btn btn-primary'><FaGoogle className=' w-6 h-6 text-green'/> <span className='text-white px-4'>Sign in with Google</span></button>
                
            </div>
            <div>
            <button onClick={handleSignInWithGithub} className=' btn w-full'><FaGithub className=' w-6 h-6 text-green'/> <span className='text-white px-4'>Sign in with Github</span></button>
                
            </div>
        </div>
    );
};

export default SocialLoginBtn;