import React, { createContext, useState } from "react";
const HeatingContext = createContext();

export const HeatingProvider = ({ children }) => {
  const [timeSpeed, setTimeSpeed] = useState(1); // Default speed
  const [heatingStates, setHeatingStates] = useState(() =>
    Array(7).fill({ temperature: 21, isZone: false })
  );
  const [heatingZones, setHeatingZones] = useState(() =>
    Array(3).fill({
      active: false,
      rooms: [
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
        { id: 6, active: false },
        { id: 7, active: false },
      ],
      temperature: 21,
      period: 1,
    })
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

  return (
    // HeatingContext.js adjustment
<HeatingContext.Provider 
  value={{
    simulation: [simulationState, setSimulationState],
    thermostat: [
      heatingStates,
      increaseTemperature,
      decreaseTemperature,
    ],
    timeSpeed, // Provided directly
    setTimeSpeed, // Provided directly
    zones: [heatingZones, setHeatingZones],
  }}
>
  {children}
</HeatingContext.Provider>
  );
};

export default HeatingContext;

// const getTemperatureByIndex = (index) => {
//   // Ensure the index is within the bounds of the array
//   if (index >= 0 && index < heatingStates.length) {
//     return heatingStates[index].temperature;
//   } else {
//     // Handle out-of-bounds index
//     console.error("Index out of bounds");
//     return null; // or any other appropriate value indicating an error
//   }
// };

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
