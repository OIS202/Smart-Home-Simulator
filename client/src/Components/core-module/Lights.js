import * as React from "react";
import { useContext } from "react";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { logDeviceChange } from '../../utils/logDeviceChange';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";

export default function Lights(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;
  // const [deviceInfos, setDeviceInfos] = info;
  let lights = [];

const handleBtn = (btnId) => (e) => {
  e.preventDefault();
  toggleDeviceState(btnId);
  const newState = !deviceStates[btnId]; // Assuming this toggles the state
  logDeviceChange('Light', btnId, newState);
};
  //   const { props.deviceStates, props.toggleDeviceState } = useContext(DeviceContext);

  // if (props.source === "add") {
  //   return (
  //     <IconButton
  //       color="white"
  //       //   onClick={handleBtn(6)}
  //       sx={{
  //         position: "absolute",
  //         top: "5%",
  //         left: "10%",
  //         // transform: "translate(-50%, -50%)",
  //         backgroundColor: "red",
  //       }}
  //     >
  //       <LightbulbIcon />
  //     </IconButton>
  //   );
  // } else
  // console.log(lights);
  // if (props.source === "add") {
  //   console.log("reached lights.js");
  //   lights.push({
  //     type: `${props.type}`,
  //     name: `${props.name}`,
  //     top: `${props.top}`,
  //     left: `${props.left}`,
  //   });
  //   return (
  //     <>
  //       <IconButton
  //         color="white"
  //         //   onClick={handleBtn(6)}
  //         sx={{
  //           position: "absolute",
  //           top: `${props.top.toString()}%`,
  //           left: `${props.left.toString()}%`,
  //           // transform: "translate(-50%, -50%)",
  //           backgroundColor: "red",
  //         }}
  //       >
  //         <LightbulbIcon />
  //       </IconButton>
  //     </>
  //   );
  // }
  if (props.source === "layout") {
    return (
      <>
        <IconButton
          color="white"
          // className={selectedDevices.includes("light") ? "active" : ""}
          // className={`btn1 ${selectedDevices.includes("btn1") && activeBtn}`}

          // className={` ${props.deviceStates[0]}`}
          onClick={handleBtn(0)}
          sx={{
            position: "absolute",
            top: "18%",
            left: "52%",
            // transform: "translate(-50%, -50%)",
            "&:hover": "none",
            // backgroundColor: isOn["btn1"] ? "gold" : "lightgrey",
            backgroundColor: deviceStates[0] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
        <IconButton
          color="white"
          // className={`btn2 ${props.deviceStates[1] && activeBtn}`}
          // onClick={handleBtn("btn2", 1)}
          onClick={handleBtn(1)}
          sx={{
            position: "absolute",
            top: "15%",
            left: "75%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[1] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
        <IconButton
          color="white"
          // className={`btn3 ${props.deviceStates[2] && activeBtn}`}
          // onClick={handleBtn("btn3")}
          onClick={handleBtn(2)}
          sx={{
            position: "absolute",
            // width: "10%",
            // height: "10%",
            top: "56%",
            left: "78%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[2] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon
          // sx={{
          //   position: "relative",
          //   width: "100%",
          // }}
          />
        </IconButton>
        <IconButton
          color="white"
          // className={`btn4 ${isOn["btn4"] && activeBtn}`}
          // onClick={handleBtn("btn4")}
          onClick={handleBtn(3)}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "55%",
            left: "27%",
            // transform: "translate(-50%, -50%)",
            // backgroundColor: isOn["btn4"] ? "gold" : "lightgrey",
            backgroundColor: deviceStates[3] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
        <IconButton
          color="white"
          onClick={handleBtn(4)}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "75%",
            left: "75%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[4] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
        <IconButton
          color="white"
          onClick={handleBtn(5)}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "55%",
            left: "58%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[5] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
        <IconButton
          color="white"
          onClick={handleBtn(6)}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "37%",
            left: "33%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[6] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
      </>
    );
  } else if (props.source === "module") {
    return (
      <FormGroup sx={{ padding: "10px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Kitchen"
          checked={deviceStates[0]}
          // context={DeviceContext}
          onChange={() => {
            toggleDeviceState(0);
            // handleDeviceToggle("btn1")
            // handleChange
            // setDeviceState([0]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Living Room"
          checked={deviceStates[1]}
          onChange={() => {
            toggleDeviceState(1);
            // setDeviceState([1]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Kid Bedroom"
          checked={deviceStates[2]}
          onChange={() => {
            toggleDeviceState(2);
            // setDeviceState([2]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Master Bedroom"
          checked={deviceStates[4]}
          onChange={() => {
            toggleDeviceState(4);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Bathroom"
          checked={deviceStates[5]}
          onChange={() => {
            toggleDeviceState(5);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Garage"
          checked={deviceStates[3]}
          onChange={() => {
            toggleDeviceState(3);
            // setDeviceState([3]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Backyard"
          checked={deviceStates[6]}
          onChange={() => {
            toggleDeviceState(6);
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="All Lights"
          checked={deviceStates[7]}
          onChange={() => {
            toggleAll("lights");
          }}
        />
      </FormGroup>
    );
  }
}

// import React, { useState } from "react";

// function Lights() {
//   const [lights, setLights] = useState({
//     kitchen: false,
//     livingRoom: false,
//     bedroom: false,
//     // Add more lights as needed
//   });

//   // Function to toggle the state of a light
//   const toggleLight = (light) => {
//     setLights((prevLights) => ({
//       ...prevLights,
//       [light]: !prevLights[light],
//     }));
//   };

//   return (
//     <div>
//       <LightsList lights={lights} toggleLight={toggleLight} />
//       <HomeImage lights={lights} toggleLight={toggleLight} />
//     </div>
//   );
// }

// export default Lights;
