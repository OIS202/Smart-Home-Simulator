import React, { createContext, useState } from "react";

const ProtectionContext = createContext();

export const ProtectionProvider = ({ children }) => {
  const [awayState, setAwayState] = useState(false);

  return (
    <ProtectionContext.Provider
      value={{
        away: [awayState, setAwayState],
        // add: [deviceInfos, addDevices],
      }}
    >
      {children}
    </ProtectionContext.Provider>
  );
};

export default ProtectionContext;
