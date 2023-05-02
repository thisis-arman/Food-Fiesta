import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer.jsx/Footer';

const Main = () => {
    return (
        <div className='md:px-20 px-8'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;