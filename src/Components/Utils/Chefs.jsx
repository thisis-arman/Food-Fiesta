import React from "react";

const ChefsCard = ({ chef }) => {
  console.log(chef);
  const { name, number_of_recipes, years_of_experience, likes, image_url } =
    chef;
  return (
    <div>
      <div className="card card-side border border-1 border-lime-400 shadow-xl">
        <figure>
          <img
            src={image_url}
            alt="chef image"
          />
        </figure>
        <div className="card-body pl-10">
          <h2 className="card-title">{name}</h2>
          <p>Number Of Recipes : {number_of_recipes}</p>
          <p>Experiences : {years_of_experience}</p>
          <p>Likes : {likes}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
