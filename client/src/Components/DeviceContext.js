// // DeviceContext.js
// import React, { createContext, useContext, useState } from "react";

// const DeviceContext = createContext();

// export const DeviceProvider = ({ children }) => {
//   const [selectedDevices, setSelectedDevices] = useState([]);

//   const toggleDevice = (device) => {
//     setSelectedDevices((prevSelectedDevices) =>
//       prevSelectedDevices.includes(device)
//         ? prevSelectedDevices.filter((d) => d !== device)
//         : [...prevSelectedDevices, device]
//     );
//   };

//   return (
//     <DeviceContext.Provider value={{ selectedDevices, toggleDevice }}>
//       {children}
//     </DeviceContext.Provider>
//   );
// };

// export const useDeviceContext = () => useContext(DeviceContext);

import React, { createContext, useState } from "react";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [deviceStates, setDeviceStates] = useState([]);

  const toggleDeviceState = (index) => {
    setDeviceStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle state at index
      console.log("state was changed:");
      console.log(newState);
      return newState;
    });
  };

  return (
    <DeviceContext.Provider value={{ deviceStates, toggleDeviceState }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;
