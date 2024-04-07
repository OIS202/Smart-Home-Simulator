import * as React from "react";
import { useContext } from "react";

import { IconButton, Typography, Button, Box } from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";
import HeatingContext from "../contexts/HeatingContext";
// import CreateZone from "./CreateZone";

export default function MotionSensors(props) {
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
    // return <CreateZone />;
  };

  const rooms = [
    { 18: "Kitchen" },
    { 19: "Living Room" },
    { 20: "Kid Bedroom" },
    { 21: "Master Bedroom" },
    { 22: "Bathroom" },
    { 23: "Garage" },
  ];
  function findRoom(roomNumber) {
    for (const room of rooms) {
      // Iterate through each object in the array
      const key = Object.keys(room)[0]; // Get the numeric key
      if (parseInt(key) === roomNumber) {
        // Convert the key to a number and check if it matches the roomNumber
        return room[roomNumber]; // Return the room name if the key matches
      }
    }
    return "Room not found"; // Return a default value if the room is not found
  }
  // const zone1 = () => {

  //   return heatingStates.map((temp) => (
  //     <Typography>{deviceStates[0] ? `Living Room` : ``}</Typography>
  //   ));
  // };

  if (props.source === "module") {
    return (
      <>
        <Box sx={{ margin: "20px auto" }}>
          <Typography variant="h6">Active Zones</Typography>
          <br />
          <Typography variant="h6">Zone 1</Typography>
          <Typography>Temperature: {heatingStates[0].temperature}°C</Typography>
          {/* {zone1} */}
          <Typography>{deviceStates[18] ? `${findRoom(18)}` : ``}</Typography>
          <Typography>{deviceStates[19] ? `${findRoom(19)}` : ``}</Typography>
          <Typography>{deviceStates[20] ? `${findRoom(20)}` : ``}</Typography>
          <br />
          <Typography variant="h6">Zone 2</Typography>
          <Typography>Temperature: {heatingStates[5].temperature}°C</Typography>
          <Typography>{deviceStates[21] ? `${findRoom(21)}` : ``}</Typography>
          <Typography>{deviceStates[22] ? `${findRoom(22)}` : ``}</Typography>
          <Typography>{deviceStates[23] ? `${findRoom(23)}` : ``}</Typography>
          <br />
          {/* <Button
            disabled={false} //disable after 2 zones
            variant="contained"
            sx={{ margin: "10px" }}
          >
            <Typography>Create Zone</Typography>
          </Button> */}
          {/* <CreateZone /> */}
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
      </>
    );
  }
}
