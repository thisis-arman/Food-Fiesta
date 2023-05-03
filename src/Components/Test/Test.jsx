import React, { useEffect } from 'react';

const Test = () => {
    useEffect(()=>{
        fetch('../../../public/Data/Recipes.json')
         .then(res => res.json())
         .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Test;