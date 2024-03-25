import * as React from "react";
import { useContext } from "react";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";

export default function Lights(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState] = isOn;
  // const [deviceInfos, setDeviceInfos] = info;
  let lights = [];

  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    toggleDeviceState(btnId);
  };

  if (props.source === "layout") {
    return (
      <>
        <IconButton
          color="white"
          // className={selectedDevices.includes("light") ? "active" : ""}
          // className={`btn1 ${selectedDevices.includes("btn1") && activeBtn}`}

          // className={` ${props.deviceStates[0]}`}
          onClick={handleBtn(18)}
          sx={{
            position: "absolute",
            top: "18%",
            left: "52%",
            // transform: "translate(-50%, -50%)",
            "&:hover": "none",
            // backgroundColor: isOn["btn1"] ? "#e57373" : "lightgrey",
            backgroundColor: deviceStates[18] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton>
        <IconButton
          color="white"
          // className={`btn2 ${props.deviceStates[1] && activeBtn}`}
          // onClick={handleBtn("btn2", 1)}
          onClick={handleBtn(19)}
          sx={{
            position: "absolute",
            top: "15%",
            left: "75%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[19] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton>
        <IconButton
          color="white"
          // className={`btn3 ${props.deviceStates[2] && activeBtn}`}
          // onClick={handleBtn("btn3")}
          onClick={handleBtn(20)}
          sx={{
            position: "absolute",
            // width: "10%",
            // height: "10%",
            top: "56%",
            left: "78%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[20] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon
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
          onClick={handleBtn(21)}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "55%",
            left: "27%",
            // transform: "translate(-50%, -50%)",
            // backgroundColor: isOn["btn4"] ? "#e57373" : "lightgrey",
            backgroundColor: deviceStates[21] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton>
        <IconButton
          color="white"
          onClick={handleBtn(22)}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "75%",
            left: "75%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[22] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton>
        <IconButton
          color="white"
          onClick={handleBtn(23)}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "55%",
            left: "58%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[23] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton>
        {/* <IconButton
          color="white"
          onClick={handleBtn(24)}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "37%",
            left: "33%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: deviceStates[24] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton> */}
      </>
    );
  } else if (props.source === "heating") {
    return (
      <FormGroup sx={{ padding: "10px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Kitchen"
          checked={deviceStates[18]}
          // context={DeviceContext}
          onChange={() => {
            toggleDeviceState(18);
            // handleDeviceToggle("btn1")
            // handleChange
            // setDeviceState([0]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Living Room"
          checked={deviceStates[19]}
          onChange={() => {
            toggleDeviceState(19);
            // setDeviceState([1]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Kid Bedroom"
          checked={deviceStates[20]}
          onChange={() => {
            toggleDeviceState(20);
            // setDeviceState([2]);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Master Bedroom"
          checked={deviceStates[21]}
          onChange={() => {
            toggleDeviceState(21);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Bathroom"
          checked={deviceStates[22]}
          onChange={() => {
            toggleDeviceState(22);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Garage"
          checked={deviceStates[23]}
          onChange={() => {
            toggleDeviceState(23);
            // setDeviceState([3]);
          }}
        />
        {/* <FormControlLabel
          control={<Checkbox />}
          label="Backyard"
          checked={deviceStates[24]}
          onChange={() => {
            toggleDeviceState(24);
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="All Thermostats"
          checked={deviceStates[25]}
          onChange={() => {
            // all(props.deviceStates);
            toggleDeviceState(25);
          }}
        /> */}
      </FormGroup>
    );
  }
}
