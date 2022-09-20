import React from "react";

const Category = () => {
  return (
    <div className=" p-12">
      <div className="md:flex bg-base-100 shadow-xl">
        <div className="card bg-base-100 rounded-none">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
          </div>
        </div>
        <div className="card my-10 md:my-0 rounded-none border-x">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
          </div>
        </div>
        <div className="card my-10 md:my-0 rounded-none border-x">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
          </div>
        </div>
        <div className="card my-10 md:my-0 rounded-none border-x">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
          </div>
        </div>
        <div className="card rounded-none">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
