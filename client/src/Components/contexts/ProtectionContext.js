import React, { createContext, useState, useEffect, useContext } from "react";
import DeviceContext from "./DeviceContext"; // Ensure this path is correct for your project structure

const ProtectionContext = createContext();

export const ProtectionProvider = ({ children }) => {
  const [awayState, setAwayState] = useState(false);
  const [alarmState, setAlarmState] = useState(false);
  const [timerState, setTimerState] = useState(120);
  const [countdownState, setCountdownState] = useState(timerState);

  const { closeAllDoorsAndWindows } = useContext(DeviceContext); // Use the context to get the method for closing all doors and windows

  useEffect(() => {
    let intervalId;

    if (alarmState) {
      // Start countdown when alarm is triggered
      intervalId = setInterval(() => {
        setCountdownState((prevCountdown) => {
          if (prevCountdown <= 0) {
            clearInterval(intervalId);
            return 0;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    } else {
      // Reset countdown when alarm is turned off
      setCountdownState(timerState);
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Cleanup interval on unmount or alarm off
  }, [alarmState, timerState]);

  useEffect(() => {
    // Automatically close all doors and windows when away mode is activated
    if (awayState) {
      closeAllDoorsAndWindows();
    }
  }, [awayState, closeAllDoorsAndWindows]); // React to changes in awayState

  return (
    <ProtectionContext.Provider
      value={{
        away: [awayState, setAwayState],
        alarm: [alarmState, setAlarmState],
        countdown: [countdownState, setCountdownState],
        timer: [timerState, setTimerState],
      }}
    >
      {children}
    </ProtectionContext.Provider>
  );
};

export default ProtectionContext;
