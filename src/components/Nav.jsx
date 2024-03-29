import React from "react";

const Nav = ({ input, budget, handleInput, handleSet }) => {
  return (
    <div className=" flex justify-between items-center mb-6">
      <h1 className=" text-2xl font-black text-orange1">
        X<span className=" text-black1">SNEAKERS</span>
      </h1>

      <div className=" flex justify-center items-center gap-4">
        <input
          value={input}
          onChange={handleInput}
          
          className=" bg-white rounded-md p-2"
          placeholder=" set bugdet"
          type="number"
        />
        <button
          onClick={handleSet}
          className="  bg-orange1 px-8 py-2 rounded-md text-white font-semibold"
        >
          Set
        </button>
        <p className=" text-xl text-black1 font-medium text-center">
          Budget <span className=" text-orange1"> {budget}$</span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
