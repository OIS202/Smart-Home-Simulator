import React, { createContext, useState, useEffect } from "react";

const ProtectionContext = createContext();

export const ProtectionProvider = ({ children }) => {
  const [awayState, setAwayState] = useState(false);

  const [alarmState, setAlarmState] = useState(false);
  const [timerState, setTimerState] = useState(120);

  const [countdownState, setCountdownState] = useState(timerState);

  useEffect(() => {
    let intervalId;

    if (alarmState) {
      // Start countdown when alarm is triggered
      intervalId = setInterval(() => {
        setCountdownState((prevCountdown) => {
          if (prevCountdown <= 0) {
            clearInterval();
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
  }, [alarmState]);

  return (
    <ProtectionContext.Provider
      value={{
        away: [awayState, setAwayState],
        alarm: [alarmState, setAlarmState],
        countdown: [countdownState, setCountdownState],
        timer: [timerState, setTimerState],
        // add: [deviceInfos, addDevices],
      }}
    >
      {children}
    </ProtectionContext.Provider>
  );
};

export default ProtectionContext;
