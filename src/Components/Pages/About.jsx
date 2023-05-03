import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/K6L8n5C/wepik-export-20230501202714.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Our Story!</h1>
            <p className="py-3">A passion for cooking and sharing recipes</p>
            <p className="py-6">
            Food Recipes was founded by a group of food enthusiasts who are passionate about cooking and sharing their favorite recipes with others. We believe that good food should be accessible to everyone and that cooking can be both fun and rewarding.
              <br /> <br />
              Our website features a wide range of recipes from around the world, including traditional and modern dishes, as well as vegetarian and vegan options. We are constantly adding new recipes and categories to our website, so there is always something new to discover.
              <br /> <br />
              At Food Recipes, we are committed to providing high-quality content that is easy to follow and understand. We test all of our recipes thoroughly to ensure that they are accurate and delicious, and we provide detailed instructions and photos to guide you through the cooking process.
              <br /> <br />We also believe in the importance of community and love to hear from our readers. We welcome your feedback, comments, and suggestions and are always looking for ways to improve our website and better serve our users.
            </p>
            <p>Thank you for visiting Food Fiesta, and we hope you enjoy our website as much as we do.</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
