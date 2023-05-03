import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = ({ recipe }) => {
  const { recipe_name, cooking_method, ingredients, rating ,recipe_image} = recipe;

  const [isToastVisible, setIsToastVisible] = useState(false);

  
  const notify = () => {
    setIsToastVisible(true);
    toast("Added to Favorite");
  }
   /* const handleToastClose = () => {
    setIsToastVisible(false);
  }; */

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-4 my-14">
        <figure>
            
          <img className="w-64"
            src={recipe_image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl mb-6 underline  text-center font-bold">{recipe_name} <FaRegHeart disabled={isToastVisible} onClick={notify} title="Add to Favorite" className="text-red-500 h-14 font-extrabold w-14 btn-ghost btn" />
          </h2>
          <ToastContainer />
          <div className="md:flex gap-4">
            <p>
              <span className="text-xl font-bold">Cooking Methods:</span>
              {cooking_method.map((method) => (
                <li>{method}</li>
              ))}
            </p>
            <p>
              <span className="text-xl font-bold">Ingredients:</span>
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </p>
          </div>
          {/*  <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
