import React, { createContext, useState } from "react";

const HeatingContext = createContext();

export const HeatingProvider = ({ children }) => {
  const [heatingStates, setHeatingStates] = useState(() =>
    Array(7).fill({ temperature: 21, isZone: false })
  );
  const [heatingZones, setHeatingZones] = useState(() =>
    Array(3).fill({ rooms: {}, temperature: 21, period: 1 })
  );
  const [simulationState, setSimulationState] = useState(false);

  const increaseTemperature = (index) => {
    setHeatingStates((prevState) => {
      const newState = prevState.map((room, idx) => {
        if (idx === index) {
          return { ...room, temperature: room.temperature + 1 };
        }
        return room;
      });
      console.log("Heating state was changed:");
      console.log(newState);
      return newState;
    });
  };
  const decreaseTemperature = (index) => {
    setHeatingStates((prevState) => {
      const newState = prevState.map((room, idx) => {
        if (idx === index) {
          return { ...room, temperature: room.temperature - 1 };
        }
        return room;
      });
      console.log("Heating state was changed:");
      console.log(newState);
      return newState;
    });
  };

  const getTemperatureByIndex = (index) => {
    // Ensure the index is within the bounds of the array
    if (index >= 0 && index < heatingStates.length) {
      return heatingStates[index].temperature;
    } else {
      // Handle out-of-bounds index
      console.error("Index out of bounds");
      return null; // or any other appropriate value indicating an error
    }
  };

  return (
    <HeatingContext.Provider
      value={{
        simulation: [simulationState, setSimulationState],
        thermostat: [
          heatingStates,
          increaseTemperature,
          decreaseTemperature,
          // toggleHeatingState,
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

// const decreaseTemperature = (index) => {
//   setHeatingStates((prevState) => {
//     reading();
//     const newState = [...prevState];
//     newState[index].temperature = newState[index].temperature - 1; // Toggle state at index
//     console.log("heating state was changed:");
//     console.log(newState);
//     return newState;
//   });
// };

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
