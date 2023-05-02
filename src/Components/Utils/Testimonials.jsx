import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = ({testimonial}) => {
    console.log(testimonial)
    const {id,name,image,testimo} =testimonial;
  return (

    <Marquee>
    <div>
      <div className="card w-96 bg-gray-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img style={{borderRadius:"50%"}}
            src="https://i.ibb.co/r2RQFM2/wepik-export-20230501203959.png"
            alt="Shoes"
            className="w-24"
            
          />
        </figure>
        <div className="card-body items-center text-center ">
          <p className="my-0">{testimo}</p>
          <h2 className="card-title my-0">{name}</h2>
        </div>
      </div>
    </div>
    </Marquee>
  );
};

export default Testimonials;
