import * as React from "react";
import { useContext } from "react";

import WindowIcon from "@mui/icons-material/Window";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";

export default function Windows(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;
  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    toggleDeviceState(btnId);
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
            backgroundColor: deviceStates[12] ? "lightblue" : "lightgrey",
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
            backgroundColor: deviceStates[13] ? "lightblue" : "lightgrey",
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
            backgroundColor: deviceStates[14] ? "lightblue" : "lightgrey",
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
            backgroundColor: deviceStates[15] ? "lightblue" : "lightgrey",
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
            backgroundColor: deviceStates[16] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
      </>
    );
  } else if (props.source === "module") {
    return (
      //can eventually add children in form group
      <FormGroup sx={{ padding: "10px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Master Bedroom"
          checked={deviceStates[12]}
          onChange={() => {
            toggleDeviceState(12);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Kid Bedroom"
          checked={deviceStates[13]}
          onChange={() => {
            toggleDeviceState(13);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Living Room"
          checked={deviceStates[14]}
          onChange={() => {
            toggleDeviceState(14);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Kitchen"
          checked={deviceStates[15]}
          onChange={() => {
            toggleDeviceState(15);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Garage"
          checked={deviceStates[16]}
          onChange={() => {
            toggleDeviceState(16);
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="All Windows"
          checked={deviceStates[17]}
          onChange={() => {
            toggleAll("windows");
          }}
        />
      </FormGroup>
    );
  }
}
