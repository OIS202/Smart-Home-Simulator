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
import Thermostats from "../heating-module/Thermostats";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [deviceStates, setDeviceStates] = useState(() => Array(25).fill(false));

  const [deviceInfos, setDeviceInfos] = useState(() => Array(3).fill({}));
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
      console.log("Device state was changed:");
      console.log(newState);
      return newState;
    });
  };

  const toggleAll = (type) => {
    setDeviceStates((prevState) => {
      const newState = [...prevState];
      let start, end;
      //if add device is successful, make thes buttons 1, 2, 3, 4
      let light = 7,
        door = 11,
        window = 17,
        thermostat = 24;

      switch (type) {
        case "lights":
          start = 0;
          end = 6;
          break;
        case "doors":
          start = 8;
          end = 10;
          break;
        case "windows":
          start = 12;
          end = 16;
          break;
        case "thermostats":
          start = 18;
          end = 23;
          break;
        default:
          return prevState; // If type is not recognized, return previous state
      }

      for (let i = start; i <= end; i++) {
        if (newState[light] == false && !newState[i]) {
          newState[i] = !newState[i];
        } else if (newState[door] == false && !newState[i]) {
          newState[i] = !newState[i];
        } else if (newState[window] == false && !newState[i]) {
          newState[i] = !newState[i];
        } else if (newState[thermostat] == false && !newState[i]) {
          newState[i] = !newState[i];
        }

        if (newState[light] == true && newState[i]) {
          newState[i] = !newState[i];
        } else if (newState[door] == true && newState[i]) {
          newState[i] = !newState[i];
        } else if (newState[window] == true && newState[i]) {
          newState[i] = !newState[i];
        } else if (newState[thermostat] == true && newState[i]) {
          newState[i] = !newState[i];
        }
      }
      newState[end + 1] = !newState[end + 1];

      console.log(`Devices of type "${type}" were toggled:`);
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
      console.log("A device was EDITED:", newDevices[index]);
      console.log(newDevices);
      return newDevices;
    });
  };

  return (
    <DeviceContext.Provider
      value={{
        isOn: [deviceStates, toggleDeviceState, toggleAll],
        edit: [deviceInfos, editDevice],
        add: [deviceInfos, addDevices],
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;
