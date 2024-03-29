import React from "react";

const Sneaker = ({ sneaker, handleAdd }) => {
  const { title, price, description, image } = sneaker;

  return (
    <div className=" w-full rounded-md bg-white">
      <figure>
        <img className=" rounded-t-md max-h-48 w-full" src={image} alt="" />
      </figure>
      <div className=" p-4">
        <div className=" flex justify-between pb-2">
          <h1 className=" text-xl text-black1 font-semibold">{title}</h1>
          <h1 className=" text-xl text-orange1 font-semibold">${price}</h1>
        </div>
        <p className=" text-black1 opacity-50 pb-4">{description}</p>
        <button
          onClick={() => handleAdd(sneaker)}
          className=" bg-orange1 p-2 text-center w-full rounded-md text-white font-semibold"
        >
          Add to List
        </button>
      </div>
    </div>
  );
};

export default Sneaker;
