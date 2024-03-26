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
import HeatingContext from "../Components/contexts/HeatingContext";

const HouseLayout = () => {
  // const { deviceStates, toggleDeviceState } = useContext(DeviceContext);
  const { getActiveModule, getActiveFeature } = useContext(ModuleContext);

  const activeModule = getActiveModule() - 1;
  const activeFeature = getActiveFeature();

  const { simulation } = useContext(HeatingContext);
  const [simulationState] = simulation;

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

/**
 *
 *
 *
 * Light buttons
 * btn1 through btn7
 *
 */
// function LightBtns() {
//   return (
//     <>
//       <IconButton
//         color="white"
//         // className={selectedDevices.includes("light") ? "active" : ""}
//         // className={`btn1 ${selectedDevices.includes("btn1") && activeBtn}`}

//         // className={` ${deviceStates[0]}`}
//         onClick={handleBtn(0)}
//         sx={{
//           position: "absolute",
//           top: "18%",
//           left: "52%",
//           // transform: "translate(-50%, -50%)",
//           "&:hover": "none",
//           // backgroundColor: isOn["btn1"] ? "gold" : "lightgrey",
//           backgroundColor: deviceStates[0] ? "gold" : "lightgrey",
//         }}
//       >
//         <LightbulbIcon />
//       </IconButton>
//       <IconButton
//         color="white"
//         // className={`btn2 ${deviceStates[1] && activeBtn}`}
//         // onClick={handleBtn("btn2", 1)}
//         onClick={handleBtn(1)}
//         sx={{
//           position: "absolute",
//           top: "15%",
//           left: "75%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[1] ? "gold" : "lightgrey",
//         }}
//       >
//         <LightbulbIcon />
//       </IconButton>
//       <IconButton
//         color="white"
//         // className={`btn3 ${deviceStates[2] && activeBtn}`}
//         // onClick={handleBtn("btn3")}
//         onClick={handleBtn(2)}
//         sx={{
//           position: "absolute",
//           // width: "10%",
//           // height: "10%",
//           top: "56%",
//           left: "78%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[2] ? "gold" : "lightgrey",
//         }}
//       >
//         <LightbulbIcon
//         // sx={{
//         //   position: "relative",
//         //   width: "100%",
//         // }}
//         />
//       </IconButton>
//       <IconButton
//         color="white"
//         // className={`btn4 ${isOn["btn4"] && activeBtn}`}
//         // onClick={handleBtn("btn4")}
//         onClick={handleBtn(3)}
//         sx={{
//           position: "absolute",
//           // width: "3rem",
//           // height: "3rem",
//           top: "55%",
//           left: "27%",
//           // transform: "translate(-50%, -50%)",
//           // backgroundColor: isOn["btn4"] ? "gold" : "lightgrey",
//           backgroundColor: deviceStates[3] ? "gold" : "lightgrey",
//         }}
//       >
//         <LightbulbIcon />
//       </IconButton>
//       <IconButton
//         color="white"
//         onClick={handleBtn(4)}
//         sx={{
//           position: "absolute",
//           // width: "3rem",
//           // height: "3rem",
//           top: "75%",
//           left: "75%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[4] ? "gold" : "lightgrey",
//         }}
//       >
//         <LightbulbIcon />
//       </IconButton>
//       <IconButton
//         color="white"
//         onClick={handleBtn(5)}
//         sx={{
//           position: "absolute",
//           // width: "3rem",
//           // height: "3rem",
//           top: "55%",
//           left: "58%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[5] ? "gold" : "lightgrey",
//         }}
//       >
//         <LightbulbIcon />
//       </IconButton>
//       <IconButton
//         color="white"
//         onClick={handleBtn(6)}
//         sx={{
//           position: "absolute",
//           // width: "3rem",
//           // height: "3rem",
//           top: "37%",
//           left: "33%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[6] ? "gold" : "lightgrey",
//         }}
//       >
//         <LightbulbIcon />
//       </IconButton>
//     </>
//   );
// }

/**
 *
 *
 * Window buttons
 * btn 12 through btn15
 *
 */
// function WindowBtns() {
//   return (
//     <>
//       <IconButton
//         onClick={handleBtn(12)}
//         sx={{
//           position: "absolute",
//           top: "80%",
//           left: "85%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[12] ? "lightblue" : "lightgrey",
//         }}
//       >
//         <WindowIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleBtn(13)}
//         sx={{
//           position: "absolute",
//           top: "55%",
//           left: "85%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[13] ? "lightblue" : "lightgrey",
//         }}
//       >
//         <WindowIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleBtn(14)}
//         sx={{
//           position: "absolute",
//           top: "23%",
//           left: "85%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[14] ? "lightblue" : "lightgrey",
//         }}
//       >
//         <WindowIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleBtn(15)}
//         sx={{
//           position: "absolute",
//           top: "17%",
//           left: "43%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[15] ? "lightblue" : "lightgrey",
//         }}
//       >
//         <WindowIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleBtn(16)}
//         sx={{
//           position: "absolute",
//           top: "48%",
//           left: "16%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[16] ? "lightblue" : "lightgrey",
//         }}
//       >
//         <WindowIcon />
//       </IconButton>
//     </>
//   );
// }

/**
 *
 * Buttons for the doors
 * btn 8 through btn 10
 *
 *
 */
// function DoorBtns() {
//   return (
//     <>
//       <IconButton
//         color="red"
//         onClick={handleBtn(8)}
//         sx={{
//           position: "absolute",
//           top: "37%",
//           left: "84%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[8] ? "lightgreen" : "lightgrey",
//         }}
//       >
//         <DoorFrontIcon />
//       </IconButton>
//       <IconButton
//         color="red"
//         onClick={handleBtn(9)}
//         sx={{
//           position: "absolute",
//           top: "38%",
//           left: "43%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[9] ? "lightgreen" : "lightgrey",
//         }}
//       >
//         <DoorFrontIcon />
//       </IconButton>
//       <IconButton
//         color="red"
//         onClick={handleBtn(10)}
//         sx={{
//           position: "absolute",
//           top: "90%",
//           left: "27%",
//           // transform: "translate(-50%, -50%)",
//           backgroundColor: deviceStates[10] ? "lightgreen" : "lightgrey",
//         }}
//       >
//         <DoorFrontIcon />
//       </IconButton>
//     </>
//   );
// }
