import React, { useEffect, useState } from 'react';
import './Home.css'
import heroImage from '../../../../public/images/eating-burger.png'
import ChefsCard from '../../Utils/Chefs';

const Home = () => {
    const [chefs , setChefs] =useState([])

    useEffect(()=>{
        fetch('../../../../public/Data/Chefs.json')
        .then(res => res.json())
        .then(data =>setChefs(data))
    },[])
    return (
        <div>
            {/* HERO SECTION */}
        <div className='h-[100vh] gap-10 md:flex items-center w-full'>
            <div className='w-full'>
                <h2 className='text-5xl font-extrabold my-4'>Cooking Is an Art,We are helping you to become an Artist</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore nemo nam neque amet animi dolore reprehenderit hic facilis quaerat!</p>
                <button className='btn btn-success'>Learn More</button>
            </div>
            <div className='w-full'>
                <img className='h-[90vh]' src={heroImage} alt="" />
            </div>
           
        </div>
        {/* MEET THE CHEFS */}
        <h2 className='text-4xl text-center font-bold my-5'>__MEET OUR <span className='text-green-500'>ARTIST</span> _CHEFs</h2>
        <div className='grid grid-cols-2'>
        {
            chefs.map(chef =><ChefsCard 
            key={chef.id} chef={chef}>

            </ChefsCard>)
        }
        </div>
        </div>
        
    );
};

export default Home;