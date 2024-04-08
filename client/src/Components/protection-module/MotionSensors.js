import * as React from "react";
import { useContext, useState } from "react";

import { IconButton, Typography, Button, Box } from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";
import ProtectionContext from "../contexts/ProtectionContext";
// import CreateZone from "./CreateZone";

export default function MotionSensors(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;

  const { alarm } = useContext(ProtectionContext);
  const [alarmState, setAlarmState] = alarm;

  const createZone = () => (e) => {
    e.preventDefault();
    // return <CreateZone />;
  };

  const handleAlarm = (index, e) => {
    e.preventDefault();
    if (deviceStates[index]) {
      console.log("Alarm is", alarmState);
      setAlarmState(!alarmState);
    }
    // return <CreateZone />;
  };

  const rooms = [
    { 24: "Kitchen" },
    { 25: "Living Room" },
    { 26: "Master Bedroom" },
    { 27: "Kid Bedroom" },
    { 28: "Bathroom" },
    { 29: "Garage" },
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

  if (props.source === "module") {
    return (
      <>
        <Box sx={{ margin: "20px auto" }}>
          <Typography variant="h6">Active Sensors</Typography>
          <br />
          <Typography>{deviceStates[24] ? `${findRoom(24)}` : ``}</Typography>
          <Typography>{deviceStates[25] ? `${findRoom(25)}` : ``}</Typography>
          <Typography>{deviceStates[26] ? `${findRoom(26)}` : ``}</Typography>
          <Typography>{deviceStates[27] ? `${findRoom(27)}` : ``}</Typography>
          <Typography>{deviceStates[28] ? `${findRoom(28)}` : ``}</Typography>
          <Typography>{deviceStates[29] ? `${findRoom(29)}` : ``}</Typography>
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
            backgroundColor:
              deviceStates[24] && !alarmState //sensor on, alarmState off
                ? "rgb(144, 238, 144, 0.7)" //green
                : alarmState // alarmState on
                ? "rgb(255, 0, 0, 0.7)" //red
                : "rgb(211,211,211, 0.7)", //
          }}
          onClick={(e) => handleAlarm(24, e)}
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
            backgroundColor:
              deviceStates[25] && !alarmState
                ? "rgb(144, 238, 144, 0.7)"
                : alarmState
                ? "rgb(255, 0, 0, 0.7)"
                : "rgb(211,211,211, 0.7)",
          }}
          onClick={(e) => handleAlarm(25, e)}
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
            backgroundColor:
              deviceStates[26] && !alarmState
                ? "rgb(144, 238, 144, 0.7)"
                : alarmState
                ? "rgb(255, 0, 0, 0.7)"
                : "rgb(211,211,211, 0.7)",
          }}
          onClick={(e) => handleAlarm(26, e)}
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
            backgroundColor:
              deviceStates[27] && !alarmState
                ? "rgb(144, 238, 144, 0.7)"
                : alarmState
                ? "rgb(255, 0, 0, 0.7)"
                : "rgb(211,211,211, 0.7)",
          }}
          onClick={(e) => handleAlarm(27, e)}
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
            backgroundColor:
              deviceStates[28] && !alarmState
                ? "rgb(144, 238, 144, 0.7)"
                : alarmState
                ? "rgb(255, 0, 0, 0.7)"
                : "rgb(211,211,211, 0.7)",
          }}
          onClick={(e) => handleAlarm(28, e)}
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
            backgroundColor:
              deviceStates[29] && !alarmState
                ? "rgb(144, 238, 144, 0.7)"
                : alarmState
                ? "rgb(255, 0, 0, 0.7)"
                : "rgb(211,211,211, 0.7)",
          }}
          onClick={(e) => handleAlarm(29, e)}
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
