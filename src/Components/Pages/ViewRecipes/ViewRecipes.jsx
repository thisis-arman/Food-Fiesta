import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefRecipes from "../../Utils/ChefRecipes";



const ViewRecipes = () => {
  const chefRecipes = useLoaderData();
  const { id } = useParams();
  const { chef_info, recipes } = chefRecipes;
  const { name,short_bio, number_of_recipes, years_of_experience, likes, image_url } =chef_info;
  console.log(short_bio)
 
  

  return (
    <div>
      {/* BANNER */}
      <div className="card lg:card-side bg-base-300 shadow-xl my-4">
        <figure className="w-full">
          <img className="w-48" src={image_url} alt="Album" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title text-4xl font-bold text-lime-500">
            {name}
          </h2>
          <p>{short_bio}</p>
          <span className="font-semibold text-2xl">
            {" "}
            <span className="text-lime-500 font-bold">
              {years_of_experience}
            </span>{" "}
            Experiences
          </span>
          <span className="font-semibold text-2xl ">
            {" "}
            <span className="text-lime-500 font-bold">
              {number_of_recipes}
            </span>{" "}
            Number of Own Recipes
          </span>
          <span className="font-semibold text-2xl">
            <span className="text-lime-500 font-bold">{likes}</span> People gave
            him Loves
          </span>
          {/* <div className="card-actions ">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
      <div>

       {
        recipes.map(recipe =><ChefRecipes recipe={recipe}/>)
       }
      </div>
    </div>
  );
};

export default ViewRecipes;
