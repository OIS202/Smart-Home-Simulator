import React, { createContext, useState } from "react";

const HeatingContext = createContext();

export const HeatingProvider = ({ children }) => {
  const [heatingStates, setHeatingStates] = useState(() => Array(7).fill(21));
  const [heatingZones, setHeatingZones] = useState(() =>
    Array(3).fill({ rooms: {}, temperature: 21 })
  );
  const [simulationState, setSimulationState] = useState(false);

  const reading = () => {
    for (var i = 0; i < heatingStates.length; i++) {
      console.log(heatingStates[i]);
    }
  };

  // const toggleHeatingState = (index) => {
  //   setHeatingStates((prevState) => {
  //     reading();
  //     const newState = [...prevState];
  //     newState[index] = !newState[index]; // Toggle state at index
  //     console.log("heating state was changed:");
  //     console.log(newState);
  //     return newState;
  //   });
  // };

  const increaseTemperature = (index) => {
    setHeatingStates((prevState) => {
      reading();
      const newState = [...prevState];
      newState[index] = newState[index] + 1; // Toggle state at index
      console.log("heating state was changed:");
      console.log(newState);
      return newState;
    });
  };

  const decreaseTemperature = (index) => {
    setHeatingStates((prevState) => {
      reading();
      const newState = [...prevState];
      newState[index] = newState[index] - 1; // Toggle state at index
      console.log("heating state was changed:");
      console.log(newState);
      return newState;
    });
  };
  return (
    <HeatingContext.Provider
      value={{
        simulation: [simulationState, setSimulationState],
        thermostat: [
          heatingStates,
          // toggleHeatingState,
          increaseTemperature,
          decreaseTemperature,
        ],
        zones: [heatingZones, setHeatingZones],
        // add: [deviceInfos, addDevices],
      }}
    >
      {children}
    </HeatingContext.Provider>
  );
};

export default HeatingContext;
