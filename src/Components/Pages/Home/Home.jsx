import React, { useEffect, useState } from "react";
import "./Home.css";
import heroImage from "../../../../public/images/eating-burger.png";
import ChefsCard from "../../Utils/ChefsCard";

import Testimonials from "../../Utils/Testimonials";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="">
        <div className="h-[100vh] gap-10 md:flex items-center w-full">
          <div className="w-full">
            <h2 className="text-5xl font-extrabold my-4">
              Cooking Is an Art,We are helping you to become an Artist
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              labore nemo nam neque amet animi dolore reprehenderit hic facilis
              quaerat!
            </p>
            <button className="btn btn-success">Learn More</button>
          </div>
          <div className="w-full">
            <img className="h-[90vh]" src={heroImage} alt="" />
          </div>
        </div>
      </section>

      {/* MEET THE CHEFS */}

      <section className="my-32">
        <h2 className="text-4xl text-center font-bold my-14">
          __MEET OUR <span className="text-green-500">ARTIST</span> _CHEFs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {chefs.map((chef) => (
            <ChefsCard key={chef.id} chef={chef}></ChefsCard>
          ))}
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="my-32">
        <h2 className="text-4xl font-bold text-center my-14">TESTIMONIALS</h2>
        <div className="grid md:grid-cols-2">
          {testimonials.slice(0, 2).map((testimonial) => (
            <Testimonials
              key={testimonial.id}
              testimonial={testimonial}
            ></Testimonials>
          ))}
        </div>
      </section>
      <section className="my-32">
        <div
          className="hero min-h-fit"
          style={{
            backgroundImage: `url("https://i.ibb.co/ZLvYjpp/vegetables-set-left-black-slate.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Newsleters</h1>
              <p className="mb-5">
              <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs text-black my-4" />
              <input type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs  text-black " />
              </p>
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
