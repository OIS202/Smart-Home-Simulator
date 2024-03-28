import * as React from "react";
import { useContext } from "react";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { IconButton, Typography, Button, Box } from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";
import HeatingContext from "../contexts/HeatingContext";
import CreateZone from "./CreateZone";

export default function Zones(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;

  const { thermostat, zones } = useContext(HeatingContext);
  const [
    heatingStates,
    toggleHeatingState,
    increaseTemperature,
    decreaseTemperature,
  ] = thermostat;

  const [heatingZones, setHeatingZones] = zones;

  const increaseTemp = (btnId) => (e) => {
    e.preventDefault();
    increaseTemperature(btnId);
  };

  const decreaseTemp = (btnId) => (e) => {
    e.preventDefault();
    decreaseTemperature(btnId);
  };

  const createZone = () => (e) => {
    e.preventDefault();
    return <CreateZone />;
  };

  if (props.source === "module") {
    return (
      <>
        <Box sx={{ margin: "20px auto" }}>
          <Typography variant="h6">Active Zones</Typography>
          <br />
          <Typography variant="h6">Zone 1</Typography>
          <Typography>Temperature: 22°C</Typography>
          <Typography>Living Room</Typography>
          <Typography>Bathroom</Typography>
          <Typography>Garage</Typography>
          <br />
          <Typography variant="h6">Zone 2</Typography>
          <Typography>Temperature: 17°C</Typography>
          <Typography>Kid Bedroom</Typography>
          <Typography>Master Bedroom</Typography>
          <Typography>Kitchen</Typography>
          <br />
          <Button
            disabled={false} //disable after 2 zones
            onClick={createZone()}
            variant="contained"
            sx={{ margin: "10px" }}
          >
            <Typography>Create Zone</Typography>
          </Button>
        </Box>
      </>
    );
  }

  if (props.source === "layout") {
    return (
      <>
        {/**
         *
         * KITCHEN
         *
         */}
        <IconButton
          color="white"
          size="small"
          //   onClick={increaseTemp(0)}
          sx={{
            position: "absolute",
            borderRadius: "25px",
            padding: "70px 25px",
            top: "8%",
            left: "48%",
            backgroundColor: deviceStates[18]
              ? "rgb(144, 238, 144, 0.7)"
              : "rgb(211,211,211, 0.7)",
          }}
        >
          <Typography
            variant="h8"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {`Kitchen`}
          </Typography>
        </IconButton>

        {/**
         *
         * LIVING ROOM
         *
         */}
        <IconButton
          color="white"
          size="small"
          sx={{
            position: "absolute",
            borderRadius: "25px",
            padding: "70px 25px",
            top: "8%",
            left: "66%",
            backgroundColor: deviceStates[19]
              ? "rgb(144, 238, 144, 0.7)"
              : "rgb(211,211,211, 0.7)",
          }}
        >
          <Typography
            variant="h8"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {`Living Room`}
          </Typography>
        </IconButton>

        {/**
         *
         * MASTER BEDROOM
         *
         */}
        <IconButton
          color="white"
          size="small"
          sx={{
            position: "absolute",
            borderRadius: "25px",
            padding: "68px 12px",
            top: "71%",
            left: "68%",
            backgroundColor: deviceStates[20]
              ? "rgb(144, 238, 144, 0.7)"
              : "rgb(211,211,211, 0.7)",
          }}
        >
          <Typography
            variant="h8"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {`Master Bedroom`}
          </Typography>
        </IconButton>
        {/**
         *
         * KID BEDROOM
         *
         */}
        <IconButton
          color="white"
          size="small"
          //   onClick={increaseTemp(0)}
          sx={{
            position: "absolute",
            borderRadius: "25px",
            padding: "70px 25px",
            top: "42%",
            left: "68%",
            backgroundColor: deviceStates[21]
              ? "rgb(144, 238, 144, 0.7)"
              : "rgb(211,211,211, 0.7)",
          }}
        >
          <Typography
            variant="h8"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {`Kid Bedroom`}
          </Typography>
        </IconButton>

        {/**
         *
         * BATHROOM
         *
         */}
        <IconButton
          color="white"
          size="small"
          sx={{
            position: "absolute",
            borderRadius: "25px",
            padding: "150px 5px",
            top: "42%",
            left: "53%",
            backgroundColor: deviceStates[22]
              ? "rgb(144, 238, 144, 0.7)"
              : "rgb(211,211,211, 0.7)",
          }}
        >
          <Typography
            variant="h8"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {`Bathooom`}
          </Typography>
        </IconButton>

        {/**
         *
         * GARAGE
         *
         */}
        <IconButton
          color="white"
          size="small"
          //   onClick={increaseTemp(0)}
          sx={{
            position: "absolute",
            borderRadius: "25px",
            padding: "120px 85px",
            top: "52%",
            left: "14%",
            backgroundColor: deviceStates[23]
              ? "rgb(144, 238, 144, 0.7)"
              : "rgb(211,211,211, 0.7)",
          }}
        >
          <Typography
            variant="h8"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {`Garage`}
          </Typography>
        </IconButton>

        {/* 
        
        























        
        
        
        
        */}
        {/* <FormGroup
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
        </FormGroup> */}
      </>
    );
  }
  //   else if (props.source === "heating") {
  //     return (
  //   <FormGroup sx={{ padding: "10px" }}>
  //     <FormControlLabel
  //       control={<Checkbox />}
  //       label={`Kitchen: ${heatingStates[0]}°C`}
  //       checked={deviceStates[18]}
  //       // context={DeviceContext}
  //       onChange={() => {
  //         toggleDeviceState(18);
  //         // handleDeviceToggle("btn1")
  //         // handleChange
  //         // setDeviceState([0]);
  //       }}
  //     />
  //     <FormControlLabel
  //       control={<Checkbox />}
  //       label={`Living Room: ${heatingStates[1]}°C`}
  //       checked={deviceStates[19]}
  //       onChange={() => {
  //         toggleDeviceState(19);
  //       }}
  //     />
  //     <FormControlLabel
  //       control={<Checkbox />}
  //       label={`Kid Bedroom: ${heatingStates[2]}°C`}
  //       checked={deviceStates[20]}
  //       onChange={() => {
  //         toggleDeviceState(20);
  //       }}
  //     />
  //     <FormControlLabel
  //       control={<Checkbox />}
  //       label={`Master Bedroom: ${heatingStates[3]}°C`}
  //       checked={deviceStates[21]}
  //       onChange={() => {
  //         toggleDeviceState(21);
  //       }}
  //     />
  //     <FormControlLabel
  //       control={<Checkbox />}
  //       label={`Bathroom: ${heatingStates[4]}°C`}
  //       checked={deviceStates[22]}
  //       onChange={() => {
  //         toggleDeviceState(22);
  //       }}
  //     />
  //     <FormControlLabel
  //       control={<Checkbox />}
  //       label={`Garage: ${heatingStates[5]}°C`}
  //       checked={deviceStates[23]}
  //       onChange={() => {
  //         toggleDeviceState(23);
  //       }}
  //     />
  //     {/* <FormControlLabel
  //       control={<Checkbox />}
  //       label="Backyard"
  //       checked={deviceStates[24]}
  //       onChange={() => {
  //         toggleDeviceState(24);
  //       }}
  //     />*/}
  //     <br />
  //     <FormControlLabel
  //       control={<Checkbox />}
  //       label="All Thermostats"
  //       checked={deviceStates[24]}
  //       onChange={() => {
  //         toggleAll("thermostats");
  //       }}
  //     />
  //   </FormGroup>
  // );
  //   }
}
