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
  const [deviceStates, setDeviceStates] = useState(() => Array(30).fill(false));

  const [deviceInfos, setDeviceInfos] = useState(() => Array(20).fill({}));
  // const initializeArray = (size) => {
  //   setDeviceState(Array(size).fill(false));
  // };

  const reading = () => {
    for (var i = 0; i < deviceInfos.length; i++) {
      console.log(deviceInfos[i]);
    }
  };

  const toggleDeviceState = (index) => {
    setDeviceStates((prevState) => {
      reading();
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle state at index
      console.log("state was changed:");
      console.log(newState);
      return newState;
    });
  };

  const addDevices = (addition) => {
    setDeviceInfos((prevDevices) => {
      const newDevices = [...prevDevices];
      newDevices.push(addition);
      console.log("A device was ADDED:", addition);
      console.log(newDevices);
      return newDevices;
    });
  };

  const editDevice = (edit, index) => {
    setDeviceInfos((prevDevices) => {
      const newDevices = [...prevDevices];
      newDevices[index] = edit;
      console.log("A device was changed:", newDevices[index]);
      console.log(newDevices);
      return newDevices;
    });
  };

  return (
    <DeviceContext.Provider
      value={{
        isOn: [deviceStates, toggleDeviceState],
        edit: [deviceInfos, editDevice],
        add: [deviceInfos, addDevices],
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;
