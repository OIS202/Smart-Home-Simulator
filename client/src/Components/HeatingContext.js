import React, { createContext, useState } from "react";

const HeatingContext = createContext();

export const HeatingProvider = ({ children }) => {
  const [heatingStates, setHeatingStates] = useState(() => Array(7).fill(20));

  const reading = () => {
    for (var i = 0; i < heatingStates.length; i++) {
      console.log(heatingStates[i]);
    }
  };

  const toggleHeatingState = (index) => {
    setHeatingStates((prevState) => {
      reading();
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle state at index
      console.log("heating state was changed:");
      console.log(newState);
      return newState;
    });
  };

  return (
    <HeatingContext.Provider value={{}}>{children}</HeatingContext.Provider>
  );
};

export default HeatingContext;
