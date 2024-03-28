import React, { createContext, useState } from "react";

const ModuleContext = createContext();

export const ModuleProvider = ({ children }) => {
  const [moduleStates, setModuleStates] = useState([
    {
      active: false,
      module: 1,
      features: [
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
      ],
    },
    {
      active: true,
      module: 2,
      features: [
        { id: 1, active: true },
        { id: 2, active: false },
        { id: 3, active: false },
      ],
    },
    {
      active: false,
      module: 3,
      features: [
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
      ],
    },
    {
      active: false,
      module: 4,
      features: [
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
      ],
    },
  ]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // moduleStates();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  //changes the displayed module
  const toggleActiveModule = (module) => {
    // toggleActiveFeature(1);
    setModuleStates((prevModuleStates) => {
      return prevModuleStates.map((moduleItem) => {
        if (moduleItem.module === module) {
          return { ...moduleItem, active: true };
        } else {
          return { ...moduleItem, active: false };
        }
      });
    });
    console.log("From activeMODULE ==> Module: ", module);
    console.log("From activeMODULE ==> Feature: ", getActiveFeature());
  };

  // Function to toggle the active feature within the active module
  const toggleActiveFeature = (moduleId, featureId) => {
    setModuleStates((prevModuleStates) => {
      return prevModuleStates.map((module) => {
        if (module.module === moduleId) {
          return {
            ...module,
            features: module.features.map((feature) => ({
              ...feature,
              active: feature.id === featureId,
            })),
          };
        }
        return module;
      });
    });
    console.log("From ActiveFEATURE ==> Module: ", moduleId);
    console.log("From ActiveFEATURE ==> Feature: ", featureId);
    console.log();
  };

  // Function to get the active module
  const getActiveModule = () => {
    // Find the active module
    const activeModule = moduleStates.find((item) => item.active);

    // If active module exists
    if (activeModule) {
      return activeModule.module;
    }

    return null; // Return null if no active module
  };

  // Function to get the active feature within the active module
  const getActiveFeature = () => {
    // Find the active module
    const activeModule = moduleStates.find((item) => item.active);

    // If active module exists and has features
    if (activeModule && Array.isArray(activeModule.features)) {
      // Find the active feature within the active module
      const activeFeature = activeModule.features.find(
        (feature) => feature.active
      );
      if (activeFeature) {
        return activeFeature.id;
      }
    }

    return null; // Return null if no active module or no active feature
  };

  return (
    <ModuleContext.Provider
      value={{
        moduleStates,
        toggleActiveModule,
        toggleActiveFeature,
        getActiveModule,
        getActiveFeature,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
};

export default ModuleContext;

// const moduleIndex = moduleStates.reduce((acc, obj) => {
//   acc[obj.module] = obj; // <-- NEW: store the whole object in the index
//   return acc;
// }, {});
