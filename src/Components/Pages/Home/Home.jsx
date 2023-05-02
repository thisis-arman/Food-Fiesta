import React, { useEffect, useState } from "react";
import "./Home.css";
import heroImage from "../../../../public/images/eating-burger.png";
import ChefsCard from "../../Utils/ChefsCard";
import Marquee from "react-fast-marquee";

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
              Cooking Is an <span className="text-green-500">Art</span> ,We are helping you to become an <span className="text-green-600">Artist</span> 
            </h2>
            <p>
            Cooking is the art and science of preparing food for consumption. Whether you're a professional chef or a home cook, cooking involves a variety of techniques and methods to turn raw ingredients into delicious meals.
            </p>
            <button className="btn btn-success my-6 px-8">Learn More</button>
          </div>
          <div className="w-full">
            <img className="h-[90vh]" src={heroImage} alt="" />
          </div>
        </div>
      </section>

      {/* MEET THE CHEFS */}

      <section className="my-32 relative top-52 md:top-0">
        <h2 className="text-4xl text-center font-bold my-14">
          __MEET OUR <span className="text-green-500">ARTIST</span> 
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {chefs.map((chef) => (
            <ChefsCard key={chef.id} chef={chef}></ChefsCard>
          ))}
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="my-32 relative top-52 md:top-0 ">
        <h2 className="text-4xl font-bold text-center my-14">TESTIMONIALS</h2>
        <Marquee>
        <div className="flex w-full gap-16  ">
          {testimonials.slice(0, 5).map((testimonial) => (
            <Testimonials
              key={testimonial.id}
              testimonial={testimonial}
            ></Testimonials>
          ))}
        </div>
        </Marquee>
      </section>
      <section className="my-32 relative top-52 md:top-0 mb-64 md:mb-24">
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
              <button className="btn btn-success px-8">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
