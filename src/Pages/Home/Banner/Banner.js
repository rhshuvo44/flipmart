import React from "react";
import bg from "../../../img/slide-img1.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Flipmart Hot Collection</h1>
          <p className="mb-5">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
          </p>
          <button className="btn btn-primary">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
