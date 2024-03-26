// HouseLayout.js
import React, {
  // useState,
  useContext,
} from "react";
import {
  Box,
  //  Button, IconButton
} from "@mui/material";
import house from "../assets/layout2.jpeg";

import Lights from "./core-module/Lights";
import Doors from "./core-module/Doors";
import Windows from "./core-module/Windows";

import Thermostats from "./heating-module/Thermostats";

// import DeviceContext from "./contexts/DeviceContext";
import ModuleContext from "./contexts/ModuleContext";
// import HeatingContext from "../Components/contexts/HeatingContext";
import Zones from "./heating-module/Zones";

const HouseLayout = () => {
  // const { deviceStates, toggleDeviceState } = useContext(DeviceContext);
  const { getActiveModule, getActiveFeature } = useContext(ModuleContext);

  const activeModule = getActiveModule() - 1;
  const activeFeature = getActiveFeature();

  // const { simulation } = useContext(HeatingContext);
  // const [simulationState] = simulation;

  const feature = [
    {},
    {
      1: <Lights source="layout" />,
      2: <Doors source="layout" />,
      3: <Windows source="layout" />,
    },
    {},
    {
      2: <Thermostats source="layout" />,
      3: <Zones source="layout" />,
    },
  ];

  return (
    <Box
      sx={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        position: "relative",
        height: "100%", // Adjust as needed
        width: "100%", // Adjust as needed
      }}
    >
      <img src={house} alt="House" style={{ width: "80%" }} />
      {/**
       * Image above, buttons below
       * What needs to be figured out is how to
       * automatically generate the buttons and place them accordingly
       */}
      <>{activeFeature != null ? feature[activeModule][activeFeature] : ""}</>
      {/* <LightBtns /> */}
    </Box>
  );
};

export default HouseLayout;
