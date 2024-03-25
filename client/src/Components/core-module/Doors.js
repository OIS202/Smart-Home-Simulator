import * as React from "react";
import { useContext } from "react";

import DoorFrontIcon from "@mui/icons-material/DoorFront";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";

export default function Doors(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState] = isOn;

  let doors = [
    { id: 1, type: "door", top: "10%", bottom: "10%" },
    { id: 2, type: "door", top: "90%", bottom: "90%" },
  ];

  // if (props.source === "test") {
  //   <IconButton
  //     color="red"
  //     onClick={handleBtn(1)}
  //     sx={{
  //       position: "absolute",
  //       top: "37%",
  //       left: "84%",
  //       // transform: "translate(-50%, -50%)",
  //       backgroundColor: deviceStates[1] ? "lightgreen" : "lightgrey",
  //     }}
  //   >
  //     <DoorFrontIcon />
  //   </IconButton>;
  // }

  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    toggleDeviceState(btnId);
  };
  //   const { deviceStates, toggleDeviceState } = useContext(DeviceContext);

  if (props.source === "layout") {
    return (
      <>
        <IconButton
          color="red"
          onClick={handleBtn(8)}
          sx={{
            position: "absolute",
            top: "37%",
            left: "84%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[8] ? "lightgreen" : "lightgrey",
          }}
        >
          <DoorFrontIcon />
        </IconButton>
        <IconButton
          color="red"
          onClick={handleBtn(9)}
          sx={{
            position: "absolute",
            top: "38%",
            left: "43%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[9] ? "lightgreen" : "lightgrey",
          }}
        >
          <DoorFrontIcon />
        </IconButton>
        <IconButton
          color="red"
          onClick={handleBtn(10)}
          sx={{
            position: "absolute",
            top: "90%",
            left: "27%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[10] ? "lightgreen" : "lightgrey",
          }}
        >
          <DoorFrontIcon />
        </IconButton>
      </>
    );
  } else if (props.source === "core") {
    return (
      <FormGroup sx={{ padding: "10px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Front Door"
          checked={deviceStates[8]}
          onChange={() => {
            toggleDeviceState(8);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Back Door"
          checked={deviceStates[9]}
          onChange={() => {
            toggleDeviceState(9);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Garage Door"
          checked={deviceStates[10]}
          onChange={() => {
            toggleDeviceState(10);
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="All Doors"
          checked={deviceStates[11]}
          onChange={() => {
            toggleDeviceState(11);
          }}
        />
      </FormGroup>
    );
  }
}
