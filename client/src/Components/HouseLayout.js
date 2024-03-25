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

// import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import DoorFrontIcon from "@mui/icons-material/DoorFront";
// import WindowIcon from "@mui/icons-material/Window";

import Lights from "./core-components/Lights";
import Doors from "./core-components/Doors";
import Windows from "./core-components/Windows";

import { CoreContext } from "../HomePage";
import DeviceContext from "../Components/DeviceContext";
// import { DeviceProvider } from "../Components/DeviceContext";

// import { useDeviceContext } from "./DeviceContext";

const HouseLayout = () => {
  // const [activeBtn, setActiveBtn] = useState("activeBtn");

  // const isOnn = deviceStates[index];
  // const { deviceState, setDeviceState } = useContext(DeviceContext);

  // const [isOn, setIsOn] = useState({});

  // const handleBtn = (btnId) => (e) => {
  //   e.preventDefault();
  //   toggleDeviceState(btnId);
  //   // setIsOn((state) => ({
  //   //   ...state,
  //   //   [btnId]: !state[btnId],
  //   // }));
  //   // selectedDevices(btnId);
  // };

  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  // const { selectedDevices } = useDeviceContext();

  //

  const { state, setState } = useContext(CoreContext);
  const { deviceStates, toggleDeviceState } = useContext(DeviceContext);

  const feature = [
    <Lights
      source="layout"
      deviceStates={deviceStates}
      toggleDeviceState={toggleDeviceState}
    />,
    <Doors
      source="layout"
      deviceStates={deviceStates}
      toggleDeviceState={toggleDeviceState}
    />,
    <Windows
      source="layout"
      deviceStates={deviceStates}
      toggleDeviceState={toggleDeviceState}
    />,
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
      <>{feature[state]}</>
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
