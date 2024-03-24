import * as React from "react";
// import { useContext } from "react";

import DoorFrontIcon from "@mui/icons-material/DoorFront";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

// import DeviceContext from "../Components/DeviceContext";

export default function Doors(props) {
  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    props.toggleDeviceState(btnId);
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
            backgroundColor: props.deviceStates[8] ? "lightgreen" : "lightgrey",
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
            backgroundColor: props.deviceStates[9] ? "lightgreen" : "lightgrey",
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
            backgroundColor: props.deviceStates[10]
              ? "lightgreen"
              : "lightgrey",
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
          checked={props.deviceStates[8]}
          onChange={() => {
            props.toggleDeviceState(8);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Back Door"
          checked={props.deviceStates[9]}
          onChange={() => {
            props.toggleDeviceState(9);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Garage Door"
          checked={props.deviceStates[10]}
          onChange={() => {
            props.toggleDeviceState(10);
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="All Doors"
          checked={props.deviceStates[11]}
          onChange={() => {
            props.toggleDeviceState(11);
          }}
        />
      </FormGroup>
    );
  }
}
