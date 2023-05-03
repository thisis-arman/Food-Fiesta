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
            <h1 className="text-5xl font-bold">About Us!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis eligendi exercitationem nesciunt quo cumque. Nesciunt corrupti illum ex sint.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus esse cumque numquam omnis ratione, rem autem magnam fugit itaque culpa.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
