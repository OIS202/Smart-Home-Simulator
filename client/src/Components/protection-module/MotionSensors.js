import * as React from "react";
import { useContext, useState } from "react";

import { IconButton, Typography, Button, Box } from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";
import HeatingContext from "../contexts/HeatingContext";
// import CreateZone from "./CreateZone";

export default function MotionSensors(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;

  const [alarm, setAlarm] = useState(false);

  const createZone = () => (e) => {
    e.preventDefault();
    // return <CreateZone />;
  };

  const handleAlarm = (index, e) => {
    e.preventDefault();
    if (deviceStates[index]) {
      console.log("Alarm is", alarm);
      setAlarm(!alarm);
    }
    // return <CreateZone />;
  };

  if (props.source === "module") {
    return (
      <>
        <Box sx={{ margin: "20px auto" }}>
          <Typography variant="h6">Active Sensors</Typography>
          <br />
          <Typography variant="h6">Zone 1</Typography>
          {/* {zone1} */}
          {/* <Typography>{deviceStates[18] ? `${findRoom(18)}` : ``}</Typography>
          <Typography>{deviceStates[19] ? `${findRoom(19)}` : ``}</Typography>
          <Typography>{deviceStates[20] ? `${findRoom(20)}` : ``}</Typography> */}
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
              deviceStates[24] && !alarm //sensor on, alarm off
                ? "rgb(144, 238, 144, 0.7)" //green
                : alarm // alarm on
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
              deviceStates[25] && !alarm
                ? "rgb(144, 238, 144, 0.7)"
                : alarm
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
              deviceStates[26] && !alarm
                ? "rgb(144, 238, 144, 0.7)"
                : alarm
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
              deviceStates[27] && !alarm
                ? "rgb(144, 238, 144, 0.7)"
                : alarm
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
              deviceStates[28] && !alarm
                ? "rgb(144, 238, 144, 0.7)"
                : alarm
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
              deviceStates[29] && !alarm
                ? "rgb(144, 238, 144, 0.7)"
                : alarm
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
