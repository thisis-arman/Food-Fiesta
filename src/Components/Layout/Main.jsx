import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Shared/Footer.jsx/Footer';
import Test from '../Test/test';
import { FaSpinner } from 'react-icons/fa';

const Main = () => {
    const navigation =useNavigation()
    return (
        <div className=' px-2'>
            <Header/>
            {navigation.state === 'loading'?<div className="h-screen flex items-center justify-center"><FaSpinner className='text-center h-24 w-24 text-lime-500'/></div>:
            <Outlet/> 
            }
            <Footer/>
            <Test/>
        </div>
    );
};

export default Main;