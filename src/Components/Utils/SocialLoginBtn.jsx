import React from 'react';
import { FaGithub, FaGoogle} from 'react-icons/fa';

const SocialLoginBtn = ({handleSignInWithGoogle}) => {
    return (
        <div>
            <div>
                <button onClick={handleSignInWithGoogle} className=' btn btn-primary'><FaGoogle className=' w-10 h-10 text-green'/> <span className='text-white'>Sign in with Google</span></button>
                
            </div>
            <div>
            <button className=' btn '><FaGithub className=' w-10 h-10 text-green'/> <span className='text-white'>Sign in with Github</span></button>
                
            </div>
        </div>
    );
};

export default SocialLoginBtn;