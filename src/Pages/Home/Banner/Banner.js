import React from "react";
import bg from "../../../img/slide-img1.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div 
      className="hero min-h-screen banner"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-white">
          <h1 className="mb-5 text-5xl font-bold">Flipmart Hot Collection</h1>
          <div className="max-w-md mx-auto">
          <p className="mb-5">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
          </p>
          <button className="btn btn-primary">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
