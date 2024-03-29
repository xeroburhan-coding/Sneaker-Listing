import React, { useEffect, useState } from "react";
import Sneaker from "./Sneaker";

const Sneakers = ({ handleAdd }) => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch("sneakers.json")
      .then((res) => res.json())
      .then((data) => setSneakers(data));
  }, []);

  return (
    <div className=" w-2/3 h-[580px] overflow-auto no-scrollbar grid grid-cols-2 gap-4 mb-6">
      {sneakers.map((sneaker) => (
        <Sneaker
          key={sneaker.id}
          sneaker={sneaker}
          handleAdd={handleAdd}
        ></Sneaker>
      ))}
    </div>
  );
};

export default Sneakers;
