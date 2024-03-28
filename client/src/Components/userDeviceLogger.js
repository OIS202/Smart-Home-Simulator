// useDeviceLogger.js

import { useContext } from 'react';
import DeviceContext from '../contexts/DeviceContext';

export const useDeviceLogger = () => {
  const { deviceStates, toggleDeviceState } = useContext(DeviceContext);

  const logDeviceChange = (deviceId, deviceType) => {
    const currentState = deviceStates[deviceId];
    const newState = !currentState;
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `${timestamp} | ${deviceType} ID ${deviceId} was turned ${newState ? 'ON' : 'OFF'}`;

    // Update the state in context
    toggleDeviceState(deviceId);

    // Log the change to the local storage to trigger the console update
    localStorage.setItem(`deviceStateChange_${deviceId}`, logEntry);

    // If you have a logging service or another method of logging, you can add it here
    // console.log(logEntry);
  };

  return logDeviceChange;
};
