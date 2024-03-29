import React, { useState } from "react";
import Nav from "./components/Nav";
import Sneakers from "./components/Sneakers";
import Budget from "./components/Budget";
import Toast from "./components/Toast";

const App = () => {
  const [input, setInput] = useState("");
  const [budget, setBudget] = useState(0);
  const [list, setlist] = useState([]);
  const [total, setTotal] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAdd = (sneaker) => {
    const isDuplicate = list.some((item) => item.id === sneaker.id);
    if (budget <= 0) {
      setShowToast(true);
      setToastMessage("Set budget first.");
    } else if (isDuplicate) {
      setShowToast(true);
      setToastMessage("Already added.");
    } else if (total + sneaker.price <= budget) {
      setlist((prevList) => [...prevList, sneaker]);
      setTotal((prevTotal) => prevTotal + sneaker.price);
    } else {
      setShowToast(true);
      setToastMessage("Budget Exceed.");
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSet = () => {
    const isValidInput = input > 10 && !isNaN(input);
  
    isValidInput ? setBudget(input) : (
      setShowToast(true),
      setToastMessage("Please input a valid value")
    );
    setInput("");
  };
  
  

  return (
    <div className=" mx-60 mt-6">
      <Nav
        input={input}
        handleInput={handleInput}
        handleSet={handleSet}
        budget={budget}
      ></Nav>
      <div className=" flex gap-8">
        <Sneakers handleAdd={handleAdd}></Sneakers>
        <Budget budget={budget} list={list} total={total}></Budget>
      </div>
      {showToast && (
        <Toast setShowToast={setShowToast} msg={toastMessage}></Toast>
      )}
    </div>
  );
};

export default App;
