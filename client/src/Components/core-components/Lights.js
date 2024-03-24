import * as React from "react";
// import { useContext } from "react";

import LightbulbIcon from "@mui/icons-material/Lightbulb";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

// import DeviceContext from "../Components/DeviceContext";

export default function Lights(props) {
  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    props.toggleDeviceState(btnId);
  };
  //   const { props.deviceStates, props.toggleDeviceState } = useContext(DeviceContext);

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
            backgroundColor: props.deviceStates[0] ? "gold" : "lightgrey",
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
            backgroundColor: props.deviceStates[1] ? "gold" : "lightgrey",
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
            backgroundColor: props.deviceStates[2] ? "gold" : "lightgrey",
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
            backgroundColor: props.deviceStates[3] ? "gold" : "lightgrey",
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
            backgroundColor: props.deviceStates[4] ? "gold" : "lightgrey",
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
            backgroundColor: props.deviceStates[5] ? "gold" : "lightgrey",
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
            backgroundColor: props.deviceStates[6] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
      </>
    );
  } else if (props.source === "core") {
    return (
      <FormGroup sx={{ padding: "10px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Kitchen"
          checked={props.deviceStates[0]}
          // context={DeviceContext}
          onChange={() => {
            props.toggleDeviceState(0);
            // handleDeviceToggle("btn1")
            // handleChange
            // setDeviceState([0]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Living Room"
          checked={props.deviceStates[1]}
          onChange={() => {
            props.toggleDeviceState(1);
            // setDeviceState([1]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Kid Bedroom"
          checked={props.deviceStates[2]}
          onChange={() => {
            props.toggleDeviceState(2);
            // setDeviceState([2]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Master Bedroom"
          checked={props.deviceStates[4]}
          onChange={() => {
            props.toggleDeviceState(4);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Bathroom"
          checked={props.deviceStates[5]}
          onChange={() => {
            props.toggleDeviceState(5);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Garage"
          checked={props.deviceStates[3]}
          onChange={() => {
            props.toggleDeviceState(3);
            // setDeviceState([3]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Backyard"
          checked={props.deviceStates[6]}
          onChange={() => {
            props.toggleDeviceState(6);
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="All Lights"
          checked={props.deviceStates[7]}
          onChange={() => {
            // all(props.deviceStates);
            props.toggleDeviceState(7);
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
