import React from "react";

const Category = () => {
  return (
    <div className="md:bg-base-200 md:px-20 md:p-5">
        {/* CATEGORY */}
            <h2 className="text-4xl font-bold text-center  mb-8 md:my-12 ">CATEGORIES</h2>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-10 ">
      <div className="card w-96 h-80 bg-base-100 shadow-xl">
        <figure className="px-10  pt-10">
          <img 
            src="https://i.ibb.co/TgyG2Qn/wepik-export-20230503094540.png"
            alt="Classic Cheeseburger"
            className="rounded-xl h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">Classic Cheeseburger</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
      <div className="card w-96 h-80 bg-base-100 shadow-xl">
        <figure className="px-10  pt-10">
          <img 
            src="https://i.ibb.co/k2YthQZ/wepik-export-20230503095341.png"
            alt="Mac and Cheese"
            className="rounded-xl h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">Mac and Cheese</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
      <div className="card w-96 h-80 bg-base-100 shadow-xl">
        <figure className="px-10  pt-10">
          <img 
            src="https://i.ibb.co/fSh9pmZ/wepik-export-20230503095801.png"
            alt="Southern Fried Chicken"
            className="rounded-xl h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">Southern Fried Chicken</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
      <div className="card w-96 h-80 bg-base-100 shadow-xl">
        <figure className="px-10  pt-10">
          <img 
            src="https://i.ibb.co/12p1x4Y/wepik-export-202305050323260u-OC.png"
            alt="Fried Chips"
            className="rounded-xl h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">Fried Chips</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
      
      </section>
    </div>
  );
};

export default Category;
