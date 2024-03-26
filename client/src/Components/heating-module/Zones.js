import * as React from "react";
import { useContext } from "react";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";
import HeatingContext from "../contexts/HeatingContext";

export default function Zones(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState] = isOn;

  const { thermostat } = useContext(HeatingContext);
  const [
    heatingStates,
    toggleHeatingState,
    increaseTemperature,
    decreaseTemperature,
  ] = thermostat;
  // const [deviceInfos, setDeviceInfos] = info;

  //   const handleBtn = (btnId) => (e) => {
  //     e.preventDefault();
  //     toggleDeviceState(btnId);
  //     // toggleHeatingState()
  //   };

  const increaseTemp = (btnId) => (e) => {
    e.preventDefault();
    increaseTemperature(btnId);
  };

  const decreaseTemp = (btnId) => (e) => {
    e.preventDefault();
    decreaseTemperature(btnId);
  };

  if (props.source === "layout") {
    return (
      <>
        <FormGroup
          sx={{
            position: "absolute",
            borderRadius: "25px",
            top: "18%",
            left: "50%",
            backgroundColor: deviceStates[18] ? "#EA9999" : "lightgrey",
          }}
        >
          <IconButton
            // disabled={deviceStates[18] ? false : true}
            color="white"
            onClick={increaseTemp(0)}
            size="small"
            sx={{ display: deviceStates[18] ? "block" : "none" }}
          >
            <AddIcon />
          </IconButton>

          <Typography
            variant="h8"
            sx={{ margin: deviceStates[18] ? "5px 10px" : "15px 15px" }}
          >
            {`${heatingStates[0]}°C`}
          </Typography>

          <IconButton
            // disabled={deviceStates[18] ? false : true}
            color="white"
            onClick={decreaseTemp(0)}
            size="small"
            sx={{ display: deviceStates[18] ? "block" : "none" }}
          >
            <RemoveIcon />
          </IconButton>
        </FormGroup>

        {/**
         *
         *
         */}
        <FormGroup
          sx={{
            position: "absolute",
            borderRadius: "25px",
            top: "15%",
            left: "70%",
            backgroundColor: deviceStates[19] ? "#EA9999" : "lightgrey",
          }}
        >
          <IconButton
            sx={{ display: deviceStates[19] ? "block" : "none" }}
            color="white"
            onClick={increaseTemp(1)}
            size="small"
          >
            <AddIcon />
          </IconButton>

          <Typography
            variant="h8"
            sx={{ margin: deviceStates[19] ? "5px 10px" : "15px 15px" }}
          >
            {`${heatingStates[1]}°C`}
          </Typography>

          <IconButton
            sx={{ display: deviceStates[19] ? "block" : "none" }}
            color="white"
            onClick={decreaseTemp(1)}
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </FormGroup>
        <FormGroup
          sx={{
            position: "absolute",
            borderRadius: "25px",
            top: "50%",
            left: "72%",
            backgroundColor: deviceStates[20] ? "#EA9999" : "lightgrey",
          }}
        >
          <IconButton
            sx={{ display: deviceStates[20] ? "block" : "none" }}
            color="white"
            onClick={increaseTemp(2)}
            size="small"
          >
            <AddIcon />
          </IconButton>

          <Typography
            variant="h8"
            sx={{ margin: deviceStates[20] ? "5px 10px" : "15px 15px" }}
          >
            {`${heatingStates[2]}°C`}
          </Typography>

          <IconButton
            sx={{ display: deviceStates[20] ? "block" : "none" }}
            color="white"
            onClick={decreaseTemp(2)}
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </FormGroup>
        <FormGroup
          sx={{
            position: "absolute",
            borderRadius: "25px",
            top: "75%",
            left: "70%",
            backgroundColor: deviceStates[21] ? "#EA9999" : "lightgrey",
          }}
        >
          <IconButton
            sx={{ display: deviceStates[21] ? "block" : "none" }}
            color="white"
            onClick={increaseTemp(3)}
            size="small"
          >
            <AddIcon />
          </IconButton>

          <Typography
            variant="h8"
            sx={{ margin: deviceStates[21] ? "5px 10px" : "15px 15px" }}
          >
            {`${heatingStates[3]}°C`}
          </Typography>

          <IconButton
            sx={{ display: deviceStates[21] ? "block" : "none" }}
            color="white"
            onClick={decreaseTemp(3)}
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </FormGroup>
        <FormGroup
          sx={{
            position: "absolute",
            borderRadius: "25px",
            top: "60%",
            left: "52%",
            backgroundColor: deviceStates[22] ? "#EA9999" : "lightgrey",
          }}
        >
          <IconButton
            sx={{ display: deviceStates[22] ? "block" : "none" }}
            color="white"
            onClick={increaseTemp(4)}
            size="small"
          >
            <AddIcon />
          </IconButton>

          <Typography
            variant="h8"
            sx={{ margin: deviceStates[22] ? "5px 10px" : "15px 15px" }}
          >
            {`${heatingStates[4]}°C`}
          </Typography>

          <IconButton
            sx={{ display: deviceStates[22] ? "block" : "none" }}
            color="white"
            onClick={decreaseTemp(4)}
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </FormGroup>
        <FormGroup
          sx={{
            position: "absolute",
            borderRadius: "25px",
            top: "55%",
            left: "22%",
            backgroundColor: deviceStates[23] ? "#EA9999" : "lightgrey",
          }}
        >
          <IconButton
            sx={{ display: deviceStates[23] ? "block" : "none" }}
            color="white"
            onClick={increaseTemp(5)}
            size="small"
          >
            <AddIcon />
          </IconButton>

          <Typography
            variant="h8"
            sx={{ margin: deviceStates[23] ? "5px 10px" : "15px 15px" }}
          >
            {`${heatingStates[5]}°C`}
          </Typography>

          <IconButton
            sx={{ display: deviceStates[23] ? "block" : "none" }}
            color="white"
            onClick={decreaseTemp(5)}
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </FormGroup>
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
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Kid Bedroom"
          checked={deviceStates[20]}
          onChange={() => {
            toggleDeviceState(20);
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
