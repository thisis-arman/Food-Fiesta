import React from "react";

const ChefRecipes = ({ recipe }) => {
  console.log(recipe);
  const { recipe_name, cooking_method, ingredients, rating ,recipe_image} = recipe;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-4 my-14">
        <figure>
            <span><button className="btn"><Falove</button></span>
          <img className="w-64"
            src={recipe_image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl mb-6 underline text-center font-bold">{recipe_name}</h2>
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
