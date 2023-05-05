import React from 'react';
import { FaGithub, FaGoogle} from 'react-icons/fa';

const SocialLoginBtn = ({handleUpdateProfile}) => {
    return (
        <div>
            <div className='my-2'>
                <button onClick={handleUpdateProfile} className='w-full btn btn-primary'><FaGoogle className=' w-6 h-6 text-green'/> <span className='text-white px-4'>Sign in with Google</span></button>
                
            </div>
            <div>
            <button className=' btn w-full'><FaGithub className=' w-6 h-6 text-green'/> <span className='text-white px-4'>Sign in with Github</span></button>
                
            </div>
        </div>
    );
};

export default SocialLoginBtn;