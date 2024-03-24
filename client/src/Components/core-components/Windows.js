import * as React from "react";
import { useContext } from "react";

import WindowIcon from "@mui/icons-material/Window";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

// import DeviceContext from "../Components/DeviceContext";

export default function Windows(props) {
  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    props.toggleDeviceState(btnId);
  };
  //   const { deviceStates, toggleDeviceState } = useContext(DeviceContext);

  if (props.source === "layout") {
    return (
      <>
        <IconButton
          onClick={handleBtn(12)}
          sx={{
            position: "absolute",
            top: "80%",
            left: "85%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: props.deviceStates[12] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
        <IconButton
          onClick={handleBtn(13)}
          sx={{
            position: "absolute",
            top: "55%",
            left: "85%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: props.deviceStates[13] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
        <IconButton
          onClick={handleBtn(14)}
          sx={{
            position: "absolute",
            top: "23%",
            left: "85%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: props.deviceStates[14] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
        <IconButton
          onClick={handleBtn(15)}
          sx={{
            position: "absolute",
            top: "17%",
            left: "43%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: props.deviceStates[15] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
        <IconButton
          onClick={handleBtn(16)}
          sx={{
            position: "absolute",
            top: "48%",
            left: "16%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: props.deviceStates[16] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
      </>
    );
  } else if (props.source === "core") {
    return (
      //can eventually add children in form group
      <FormGroup sx={{ padding: "10px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Master Bedroom"
          checked={props.deviceStates[12]}
          onChange={() => {
            props.toggleDeviceState(12);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Kid Bedroom"
          checked={props.deviceStates[13]}
          onChange={() => {
            props.toggleDeviceState(13);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Living Room"
          checked={props.deviceStates[14]}
          onChange={() => {
            props.toggleDeviceState(14);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Kitchen"
          checked={props.deviceStates[15]}
          onChange={() => {
            props.toggleDeviceState(15);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Garage"
          checked={props.deviceStates[16]}
          onChange={() => {
            props.toggleDeviceState(16);
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="All Windows"
          checked={props.deviceStates[17]}
          onChange={() => {
            props.toggleDeviceState(17);
          }}
        />
      </FormGroup>
    );
  }
}
