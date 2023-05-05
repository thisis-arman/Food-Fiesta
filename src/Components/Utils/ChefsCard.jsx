import React from "react";
import LazyLoad from 'react-lazy-load';

import { Link, Navigate, useNavigate } from "react-router-dom";

const ChefsCard = ({ chef }) => {
  // const Navigate =useNavigate()
  const handleViewRecipeBtn=(id)=>{
    // Navigate(`/recipes/${id}`)
  }
  // console.log(chef);
  const { id,name, number_of_recipes, years_of_experience, likes, image_url } =
    chef;
  return (
    <LazyLoad className="LazyLoad is-visible" offset={300} threshold={0.80}>
    <div className="chefs-card bg-base-200 rounded-2xl">
      <div className="card flex md:flex-none w-full card-side  shadow-xl">
        <figure className="h-80">
          <img
           className='w-70'
            src={image_url}
            alt="chef image"
          />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="my-0">Number Of Recipes : {number_of_recipes}</p>
          <p className="my-0">Experiences : {years_of_experience}</p>
          <p className="my-0">Likes : {likes}</p>
          <div className="card-actions ">
            <button onClick={()=>handleViewRecipeBtn(id)} className="btn btn-success md:px-8"><Link to={`/recipes/${id}`}>View Recipes</Link></button>
          </div>
        </div>
      </div>
    </div>
    </LazyLoad>
  );
};

export default ChefsCard;
