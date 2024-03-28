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

export default function Thermostats(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;

  const { thermostat } = useContext(HeatingContext);
  const [
    heatingStates,
    // toggleHeatingState,
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

  if (props.source === "layout" && props.active === true) {
    return (
      <>
        <FormGroup
          sx={{
            position: "absolute",
            borderRadius: "25px",
            top: "18%",
            left: "50%",
            backgroundColor:
              deviceStates[18] && heatingStates[0].temperature >= 19
                ? "#EA9999"
                : deviceStates[18] && heatingStates[0].temperature < 19
                ? "lightblue"
                : "lightgrey",
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
            {`${heatingStates[0].temperature}°C`}
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
            backgroundColor:
              deviceStates[19] && heatingStates[1].temperature >= 19
                ? "#EA9999"
                : deviceStates[19] && heatingStates[1].temperature < 19
                ? "lightblue"
                : "lightgrey",
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
            {`${heatingStates[1].temperature}°C`}
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
            backgroundColor:
              deviceStates[20] && heatingStates[2].temperature >= 19
                ? "#EA9999"
                : deviceStates[20] && heatingStates[2].temperature < 19
                ? "lightblue"
                : "lightgrey",
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
            {`${heatingStates[2].temperature}°C`}
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
            backgroundColor:
              deviceStates[21] && heatingStates[3].temperature >= 19
                ? "#EA9999"
                : deviceStates[21] && heatingStates[3].temperature < 19
                ? "lightblue"
                : "lightgrey",
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
            sx={{
              margin: deviceStates[21].temperature ? "5px 10px" : "15px 15px",
            }}
          >
            {`${heatingStates[3].temperature}°C`}
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
            backgroundColor:
              deviceStates[22] && heatingStates[4].temperature >= 19
                ? "#EA9999"
                : deviceStates[22] && heatingStates[4].temperature < 19
                ? "lightblue"
                : "lightgrey",
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
            {`${heatingStates[4].temperature}°C`}
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
            backgroundColor:
              deviceStates[23] && heatingStates[5].temperature >= 19
                ? "#EA9999"
                : deviceStates[23] && heatingStates[5].temperature < 19
                ? "lightblue"
                : "lightgrey",
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
            {`${heatingStates[5].temperature}°C`}
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
        {/* <IconButton
          color="white"
          onClick={handleBtn(18)}
          sx={{
            position: "absolute",
            top: "18%",
            left: "52%",
            backgroundColor: deviceStates[18] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton> */}
        {/* <IconButton
          color="white"
          onClick={handleBtn(19)}
          sx={{
            position: "absolute",
            top: "15%",
            left: "75%",
            backgroundColor: deviceStates[19] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton>
        <IconButton
          color="white"
          onClick={handleBtn(20)}
          sx={{
            position: "absolute",
            top: "56%",
            left: "78%",
            backgroundColor: deviceStates[20] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton>
        <IconButton
          color="white"
          onClick={handleBtn(21)}
          sx={{
            position: "absolute",
            top: "75%",
            left: "75%",
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
            top: "55%",
            left: "58%",
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
            top: "55%",
            left: "27%",
            backgroundColor: deviceStates[23] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton> */}
        {/**
         *
         *
         *
         *
         */}
        {/* <IconButton
          color="white"
          onClick={handleBtn(24)}
          sx={{
            position: "absolute",
            top: "37%",
            left: "33%",
            backgroundColor: deviceStates[24] ? "#e57373" : "lightgrey",
          }}
        >
          <DeviceThermostatIcon />
        </IconButton> */}
      </>
    );
  } else if (props.source === "module" && props.active === true) {
    return (
      <FormGroup sx={{ padding: "10px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label={`Kitchen: ${heatingStates[0].temperature}°C`}
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
          label={`Living Room: ${heatingStates[1].temperature}°C`}
          checked={deviceStates[19]}
          onChange={() => {
            toggleDeviceState(19);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={`Kid Bedroom: ${heatingStates[2].temperature}°C`}
          checked={deviceStates[20]}
          onChange={() => {
            toggleDeviceState(20);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={`Master Bedroom: ${heatingStates[3].temperature}°C`}
          checked={deviceStates[21]}
          onChange={() => {
            toggleDeviceState(21);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={`Bathroom: ${heatingStates[4].temperature}°C`}
          checked={deviceStates[22]}
          onChange={() => {
            toggleDeviceState(22);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={`Garage: ${heatingStates[5].temperature}°C`}
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
        />*/}
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="All Thermostats"
          checked={deviceStates[24]}
          onChange={() => {
            toggleAll("thermostats");
          }}
        />
      </FormGroup>
    );
  }
}
