import React from "react";

const Budget = ({ list, total, budget }) => {
  return (
    <div className=" w-1/3 bg-white rounded-md h-full py-6 px-6">
      <h1 className=" text-2xl text-orange1 font-semibold pb-4">
        Budget Left : ${budget - total}
      </h1>
      <h1 className=" text-xl text-black1 font-semibold pb-4">
        Selected : {list.length}
      </h1>
      <ul>
        {list.map((item, index) => (
          <li key={index} className=" text-black1 text-lg opacity-50 pb-2">
            {item.title}
          </li>
        ))}
      </ul>
      <button className=" bg-orange1 p-2 text-center w-full rounded-md text-white font-semibold mt-10">
        Total : ${total}
      </button>
    </div>
  );
};

export default Budget;
