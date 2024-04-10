// // DeviceContext.js

import React, { createContext, useState } from "react";
// import Thermostats from "../heating-module/Thermostats";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [deviceStates, setDeviceStates] = useState(() => Array(30).fill(false));

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

      // Marker indices for collective device control toggles
      const light = 7,
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
          console.error(`toggleAll: Unrecognized type "${type}"`);
          return prevState;
      }

      const isCollectiveStateOn = newState[start] === true; // Determine if devices are currently on

      // Toggle each device state within the specified range
      for (let i = start; i <= end; i++) {
        newState[i] = isCollectiveStateOn ? false : true; // Set opposite state
      }

      // Optionally adjust collective control state if needed
      // This step ensures "All" toggle reflects the new collective state accurately
      // If you maintain a specific "All" toggle state separately, adjust here accordingly
      if (type === "lights") newState[light] = !isCollectiveStateOn;
      if (type === "doors") newState[door] = !isCollectiveStateOn;
      if (type === "windows") newState[window] = !isCollectiveStateOn;
      if (type === "thermostats") newState[thermostat] = !isCollectiveStateOn;

      console.log(`Devices of type "${type}" were toggled:`, newState);
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
  const closeAllDoorsAndWindows = () => {
    setDeviceStates((prevState) => {
      const newState = [...prevState];
      // Assuming doors are indexes 8 to 10 and windows are indexes 12 to 16
      for (let i = 8; i <= 10; i++) newState[i] = false; // Close all doors
      for (let i = 12; i <= 16; i++) newState[i] = false; // Close all windows
      return newState;
    });
  };

  return (
    <DeviceContext.Provider
      value={{
        isOn: [deviceStates, toggleDeviceState, toggleAll],
        edit: [deviceInfos, editDevice],
        add: [deviceInfos, addDevices],
        closeAllDoorsAndWindows,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;
